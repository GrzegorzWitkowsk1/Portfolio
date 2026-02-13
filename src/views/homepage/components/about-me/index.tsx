import { Fade, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode, RefObject } from "react";
import {
	Code,
	PaletteOutlined,
	RocketLaunchOutlined,
} from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

import { IconContainer } from "components/icon-container";
import { StyledContainer } from "components/styled-container";
import { useTranslation } from "react-i18next";

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
		content: "developmentDesc",
		title: "development",
	},
	{
		icon: <PaletteOutlined />,
		content: "desingDesc",
		title: "design",
	},
	{
		icon: <RocketLaunchOutlined />,
		content: "innovationDesc",
		title: "innovation",
	},
];

export default function AboutMe({ ref }: Props) {
	const theme = useTheme();
	const { t } = useTranslation();
	const { ref: inViewRef, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

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
				{t("aboutMe.about")}{" "}
				<span style={{ color: theme.palette.primary.main }}>
					{t("aboutMe.me")}
				</span>
			</Typography>
			<Typography
				textAlign={"center"}
				variant="h6"
				color={theme.palette.grey[600]}
			>
				{t("aboutMe.aboutMeInfo")}
			</Typography>
			<Box
				ref={inViewRef}
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
					{HoveringCardsContent.map((c, index) => (
						<Fade in={inView} timeout={1000 * (index + 1)} key={index}>
							<StyledContainer>
								<IconContainer>{c.icon}</IconContainer>
								<Typography variant="h6" color="white">
									{t(`aboutMe.hoveringCards.${c.title}`)}
								</Typography>
								<Typography variant="body1" color={theme.palette.grey[600]}>
									{t(`aboutMe.hoveringCards.${c.content}`)}
								</Typography>
							</StyledContainer>
						</Fade>
					))}
				</Box>
				<Fade in={inView} timeout={HoveringCardsContent.length * 1000 + 500}>
					<StyledContainer disableHover>
						<Typography color={"white"}>{t("aboutMe.aboutMeDesc")}</Typography>
					</StyledContainer>
				</Fade>
			</Box>
		</Box>
	);
}
