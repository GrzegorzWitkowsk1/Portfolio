import { DarkMode, LightMode } from "@mui/icons-material";
import {
	Avatar,
	Box,
	IconButton,
	styled,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { PanelLeft } from "lucide-react";
import { useThemeMode } from "config/theme/theme-config";

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
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<HeaderRoot>
			<NameSection>
				{isMobile && onToggleNavigation && (
					<IconButton
						onClick={onToggleNavigation}
						aria-label="toggle navigation"
						sx={{
				
						}}
					>
						<PanelLeft color={theme.palette.mode === 'dark' ? 'white' : 'black'} size={22} />
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
							{" - Frontend Developer"}
						</Box>
					</Typography>
				)}
			</NameSection>
			<IconButton
				onClick={toggleMode}
				aria-label="toggle theme"
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
		</HeaderRoot>
	);
}
