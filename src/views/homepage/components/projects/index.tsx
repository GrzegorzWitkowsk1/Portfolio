import { RefObject } from "react";
import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import ProjectContainer from "./components/project-container";
import { projects } from "../../../../consts";

interface Props {
	ref: RefObject<HTMLElement | null>;
}

export default function Projects({ ref }: Props) {
	const theme = useTheme();

	return (
		<Box
			ref={ref}
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
				Featured{" "}
				<span style={{ color: theme.palette.primary.main }}>Projects</span>
			</Typography>
			<Typography
				textAlign={"center"}
				variant="h6"
				color={theme.palette.grey[600]}
			>
				A selection of projects that showcase my skills and experience
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: { lg: "row", md: "row", xs: "column" },
					gap: "16px",
				}}
			>
				{projects.map((p) => (
					<ProjectContainer project={p} />
				))}
			</Box>
		</Box>
	);
}
