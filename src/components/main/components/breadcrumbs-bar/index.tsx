import {
	alpha,
	Box,
	ButtonBase,
	Collapse,
	styled,
	Typography,
	useTheme,
} from "@mui/material";
import { ChevronRight, House } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigationStore } from "store/navigation-store";

const BreadcrumbsBarRoot = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	height: "29px",
	padding: "0 16px",
	gap: "6px",
	borderBottom: `1px solid ${
		theme.palette.mode === "dark"
			? theme.palette.grey[400]
			: theme.palette.grey[300]
	}`,
	backgroundColor: theme.palette.mode === "light" ? "white" : "#13171d",
}));

const BreadcrumbItem = styled(ButtonBase)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "4px",
	padding: "2px 8px",
	borderRadius: "6px",
	color: theme.palette.text.secondary,
	fontSize: "13px",
	transition: "background-color 0.15s ease",
	"&:hover": {
		backgroundColor: alpha(theme.palette.primary.main, 0.1),
	},
}));

const Separator = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	color: theme.palette.text.secondary,
	opacity: 0.5,
}));

export function BreadcrumbsBar() {
	const theme = useTheme();
	const { t } = useTranslation();
	const openFolder = useNavigationStore((s) => s.openFolder);
	const closeFolder = useNavigationStore((s) => s.closeFolder);

	const homeLabel = t("common::portfolio");
	const folderLabel =
		openFolder === "projects"
			? t("common::projects")
			: t("common::workExperience");

	return (
		<Collapse in unmountOnExit>
			<BreadcrumbsBarRoot>
				<House size={14} color={theme.palette.text.secondary} />
				{openFolder ? (
					<>
						<BreadcrumbItem onClick={closeFolder}>
							<Typography sx={{ fontSize: "13px", color: "inherit" }}>
								{homeLabel}
							</Typography>
						</BreadcrumbItem>
						<Separator>
							<ChevronRight size={14} />
						</Separator>
						<Typography
							sx={{
								fontSize: "13px",
								color: theme.palette.text.primary,
								fontWeight: 500,
							}}
						>
							{folderLabel}
						</Typography>
					</>
				) : (
					<Typography
						sx={{
							fontSize: "13px",
							color: theme.palette.text.primary,
							fontWeight: 500,
						}}
					>
						{homeLabel}
					</Typography>
				)}
			</BreadcrumbsBarRoot>
		</Collapse>
	);
}
