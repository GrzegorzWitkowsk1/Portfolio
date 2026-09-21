import { DarkMode, LightMode } from "@mui/icons-material";
import {
	Avatar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	styled,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Check, ChevronDown, PanelLeft } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "config/theme/theme-config";
import { useLanguage } from "config/language/language-config";
import { locales } from "consts";
import enFlag from "assets/flags/en-EN.svg";
import plFlag from "assets/flags/pl-PL.svg";
import { SearchCommand } from "./components/search-command";

const LANGUAGE_FLAGS: Record<string, string> = {
	"en-EN": enFlag,
	"pl-PL": plFlag,
};

const HeaderRoot = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	height: "50px",
	padding: "0 24px",
	borderBottom: `1px solid ${
		theme.palette.mode === "dark"
			? theme.palette.grey[400]
			: theme.palette.grey[300]
	}`,
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
}));

const NameSection = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "12px",
});

type HeaderProps = {
	onToggleNavigation?: () => void;
};

export function Header({ onToggleNavigation }: HeaderProps) {
	const { mode, toggleMode } = useThemeMode();
	const { lang, setLang } = useLanguage();
	const { t } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const [languageMenuAnchor, setLanguageMenuAnchor] =
		useState<null | HTMLElement>(null);

	const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setLanguageMenuAnchor(event.currentTarget);
	};

	const handleLanguageMenuClose = () => {
		setLanguageMenuAnchor(null);
	};

	const handleLanguageSelect = (prefix: string) => {
		if (prefix !== lang) {
			setLang(prefix as typeof lang);
		}
		handleLanguageMenuClose();
	};

	return (
		<HeaderRoot>
			<NameSection>
				{isMobile && onToggleNavigation && (
					<IconButton
						onClick={onToggleNavigation}
						aria-label={t("header::toggleNavigation")}
						sx={{}}
					>
						<PanelLeft
							color={theme.palette.mode === "dark" ? "white" : "black"}
							size={22}
						/>
					</IconButton>
				)}
				<Avatar
					sx={{
						width: 30,
						height: 30,
						borderRadius: "12px",
						bgcolor: "primary.main",
						color: "primary.contrastText",
						fontSize: "15px",
						fontWeight: 600,
					}}
				>
					G
				</Avatar>
				{!isMobile && (
					<Typography
						sx={{
							fontSize: "14px",
							color: (theme) =>
								theme.palette.mode === "dark" ? "white" : "black",
						}}
					>
						Grzegorz Witkowski
						<Box
							component="span"
							sx={{
								fontSize: "12px",
								color: (theme) =>
									theme.palette.mode === "dark"
										? theme.palette.grey[200]
										: theme.palette.grey[400],
								fontWeight: 400,
							}}
						>
							{" - " + t("header::role")}
						</Box>
					</Typography>
				)}
			</NameSection>
			<Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<SearchCommand />
				<IconButton
					onClick={handleLanguageMenuOpen}
					title={t("header::language")}
					aria-label={t("header::language")}
					aria-haspopup="menu"
					aria-expanded={Boolean(languageMenuAnchor)}
					sx={{
						height: "24px",
						width: "38px",
						padding: "2px",
						gap: "2px",
					}}
				>
					<Box
						component="img"
						src={LANGUAGE_FLAGS[lang]}
						alt=""
						sx={{
							width: "18px",
							height: "18px",
							borderRadius: "4px",
							display: "block",
						}}
					/>
					<ChevronDown size={13} color={theme.palette.text.secondary} />
				</IconButton>
				<Menu
					anchorEl={languageMenuAnchor}
					open={Boolean(languageMenuAnchor)}
					onClose={handleLanguageMenuClose}
				>
					{locales.map((locale) => {
						const isActive = locale.prefix === lang;
						return (
							<MenuItem
								key={locale.prefix}
								selected={isActive}
								onClick={() => handleLanguageSelect(locale.prefix)}
								sx={{
									gap: "10px",
								}}
							>
								<Box
									component="img"
									src={LANGUAGE_FLAGS[locale.prefix]}
									alt=""
									sx={{
										width: "18px",
										height: "18px",
										borderRadius: "4px",
										display: "block",
									}}
								/>
								<Typography
									sx={{
										fontSize: "14px",
										flex: 1,
									}}
								>
									{locale.name}
								</Typography>
								{isActive && (
									<Check size={16} color={theme.palette.primary.main} />
								)}
							</MenuItem>
						);
					})}
				</Menu>
				<IconButton
					onClick={toggleMode}
					aria-label={t("header::toggleTheme")}
					sx={{
						height: "16px",
						width: "16px",
						color: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[800]
								: theme.palette.grey[100],
					}}
				>
					{mode === "dark" ? <LightMode /> : <DarkMode />}
				</IconButton>
			</Box>
		</HeaderRoot>
	);
}
