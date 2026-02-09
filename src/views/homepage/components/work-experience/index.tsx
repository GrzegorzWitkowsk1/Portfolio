import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";

import ExperienceEntryContainer from "./components/experience-entry-container";
import { workExperience } from "../../../../consts";

export default function WorkExperience() {
	const theme = useTheme();

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
				Work{" "}
				<span style={{ color: theme.palette.primary.main }}>Experience</span>
			</Typography>
			<Timeline
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
				{workExperience.map((i) => (
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
				))}
			</Timeline>
		</Box>
	);
}
