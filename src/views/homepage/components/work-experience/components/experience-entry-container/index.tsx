import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import {
	CalendarMonthOutlined,
	PlayArrow,
	WorkOutline,
} from "@mui/icons-material";

import { WorkExperienceEntryType } from "../../types";
import i18n from "../../../../../../locales";
import { useTranslation } from "react-i18next";

interface Props {
	experienceEntry: WorkExperienceEntryType;
}

export default function ExperienceEntryContainer(props: Props) {
	const theme = useTheme();
	const { t } = useTranslation();

	function generateTime() {
		if (props.experienceEntry.wasInternship) {
			return t("experience.internship");
		}
		if (props.experienceEntry.dateStart) {
			if (props.experienceEntry.isCurrent) {
				return `${props.experienceEntry.dateStart} - ${t("experience.current")}`;
			}
			if (props.experienceEntry.dateEnd) {
				return `${props.experienceEntry.dateStart} - ${props.experienceEntry.dateEnd}`;
			}
		}
	}

	return (
		<Box
			sx={{
				minWidth: { lg: "900px", md: "700px", xs: "auto" },
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#131316",
				p: "16px",
				gap: "8px",
				border: `1px solid ${theme.palette.grey[800]}`,
				borderRadius: "8px",
				justifyContent: "space-between",
				transition: "300ms",
				"&:hover": {
					transform: "translateY(-10px)",
					boxShadow: `
            0 0 9px ${theme.palette.primary.dark},
            0 0 12px  ${theme.palette.primary.dark},
            0 0 15px  ${theme.palette.primary.dark}
          `,
					border: `1px solid ${theme.palette.primary.main}`,
				},
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: {
						lg: "row",
						md: "row",
						xs: "column",
						justifyContent: "space-between",
						gap: "8px",
					},
				}}
			>
				<Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
					<WorkOutline color="primary" />
					<Typography color="white" variant="h5">
						{" "}
						{props.experienceEntry.specialization}
					</Typography>
				</Box>
				<Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
					<CalendarMonthOutlined />
					<Typography color={theme.palette.grey[600]}>
						{generateTime()}
					</Typography>
				</Box>
			</Box>
			<Typography sx={{ fontSize: "16px" }} color="primary">
				{props.experienceEntry.companyName}
			</Typography>
			<Typography variant="body1" color={theme.palette.grey[600]}>
				{props.experienceEntry.translations[i18n.language].description}
			</Typography>
			{props.experienceEntry.translations[i18n.language].responsibilites.map(
				(res) => (
					<Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
						<PlayArrow sx={{ fontSize: "12px" }} color="primary" />
						<Typography variant="body1" sx={{ color: theme.palette.grey[600] }}>
							{res}
						</Typography>
					</Box>
				),
			)}
		</Box>
	);
}
