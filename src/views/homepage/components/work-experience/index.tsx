import { useInView } from "react-intersection-observer";
import Typography from "@mui/material/Typography";
import { Slide, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";

import ExperienceEntryContainer from "./components/experience-entry-container";

import { workExperience } from "consts";

export default function WorkExperience() {
	const theme = useTheme();
	const { t } = useTranslation();
	const { ref: inViewRef, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: { lg: "32px", md: "24px", xs: "12px" },
				justifyContent: "center",
				px: { lg: "20%", md: "10%", xs: "2.5%" },
				alignItems: "center",
				py: { lg: "16px", md: "12px", xs: "8px" },

				backgroundColor: "black",
			}}
		>
			<Typography
				textAlign={"center"}
				sx={{
					breakAfter: "all",
				}}
				variant="h3"
				color="white"
			>
				{t("experience.work")}{" "}
				<span style={{ color: theme.palette.primary.main }}>
					{t("experience.experience")}
				</span>
			</Typography>
			<Timeline
				ref={inViewRef}
				sx={{
					"& ::before": {
						flex: {
							lg: 1,
							md: "0 !important",
							sm: "0 !important",
							xs: "0 !important",
						},
					},
					gap: "16px",
				}}
			>
				{workExperience.map((i, index) => (
					<Slide direction="right" in={inView} timeout={500 * (index + 1)}>
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot color="primary" />
								<TimelineConnector
									sx={{
										backgroundColor: theme.palette.primary.dark,
									}}
								/>
							</TimelineSeparator>
							<TimelineContent>
								<ExperienceEntryContainer experienceEntry={i} />
							</TimelineContent>
						</TimelineItem>
					</Slide>
				))}
			</Timeline>
		</Box>
	);
}
