import { Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { RefObject } from "react";
import Box from "@mui/material/Box";

import ProjectContainer from "./components/project-container";

import { projects } from "consts";

interface Props {
	containerRef: RefObject<HTMLElement | null>;
}

export default function Projects({ containerRef }: Props) {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Box
			ref={containerRef}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				py: { lg: "16px", md: "12px", xs: "8px" },
				px: { lg: "10%", md: "10%", xs: "2.5%" },
				alignItems: "center",
				minHeight: "100vh",
				justifyContent: "center",
				backgroundColor: "#0F0F12",
			}}
		>
			<Typography textAlign={"center"} variant="h3" color="white">
				{t("projects.featured")}{" "}
				<span style={{ color: theme.palette.primary.main }}>
					{t("projects.projects")}
				</span>
			</Typography>
			<Typography
				textAlign={"center"}
				variant="h6"
				color={theme.palette.grey[600]}
			>
				{t("projects.projectsDesc")}
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: { lg: "row", md: "row", xs: "column" },
					gap: "16px",
				}}
			>
				{projects.map((p, index) => (
					<ProjectContainer index={index} project={p} />
				))}
			</Box>
		</Box>
	);
}
