import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode, RefObject } from "react";
import {
	Code,
	PaletteOutlined,
	RocketLaunchOutlined,
} from "@mui/icons-material";

import { IconContainer } from "../../../../components/icon-container";
import { StyledContainer } from "../../../../components/styled-container";

interface Props {
	ref: RefObject<HTMLElement | null>;
}

const HoveringCardsContent: {
	title: string;
	icon: ReactNode;
	content: string;
}[] = [
	{
		icon: <Code />,
		content:
			"Building scalable applications with React, TypeScript, Material UI, and other modern frameworks",
		title: "Development",
	},
	{
		icon: <PaletteOutlined />,
		content:
			"Creating intuitive user interfaces with attention to detail and user experience",
		title: "Design",
	},
	{
		icon: <RocketLaunchOutlined />,
		content: "Always learning new technologies and implementing best practices",
		title: "Innovation",
	},
];

export default function AboutMe({ ref }: Props) {
	const theme = useTheme();

	return (
		<Box
			ref={ref}
			sx={{
				backgroundColor: "black",
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				py: { lg: "16px", md: "12px", xs: "8px" },
				px: { lg: "10%", md: "10%", xs: "2.5%" },
				alignItems: "center",
				minHeight: "100vh",
				justifyContent: "center",
			}}
		>
			<Typography variant="h3" color="white">
				About <span style={{ color: theme.palette.primary.main }}>me</span>
			</Typography>
			<Typography
				textAlign={"center"}
				variant="h6"
				color={theme.palette.grey[600]}
			>
				Passionate developer with a love for creating exceptional digital
				experiences
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: { lg: "64px", md: "64px", xs: "32px" },
					margin: { lg: "64px auto", md: "64px auto", xs: "32px auto" },
				}}
			>
				<Box
					sx={{
						display: "flex",
						gap: { lg: "24px", md: "24px", xs: "12px" },
						flexDirection: { lg: "row", md: "row", xs: "column" },
					}}
				>
					{HoveringCardsContent.map((c) => (
						<StyledContainer>
							<IconContainer>{c.icon}</IconContainer>
							<Typography variant="h6" color="white">
								{c.title}
							</Typography>
							<Typography variant="body1" color={theme.palette.grey[600]}>
								{c.content}
							</Typography>
						</StyledContainer>
					))}
				</Box>
				<StyledContainer disableHover>
					<Typography color={"white"}>
						I'm a full-stack developer with a passion for building beautiful,
						functional web applications. With expertise in modern JavaScript
						frameworks and a keen eye for design, I create seamless user
						experiences that bring ideas to life. When I'm not coding, you'll
						learning new technologies, updating informations about current and
						spending quality time.
					</Typography>
				</StyledContainer>
			</Box>
		</Box>
	);
}
