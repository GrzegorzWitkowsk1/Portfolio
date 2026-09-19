import { alpha, Box, Typography, useTheme } from "@mui/material";
import { Check, MapPin, Trophy } from "lucide-react";
import { WorkExperienceEntryType } from "consts";
import { badgeSx } from "config/badge-style";
import { SectionLabel } from "components/section-label";

type WorkExperienceViewProps = {
	entry: WorkExperienceEntryType;
};

export function WorkExperienceView({ entry }: WorkExperienceViewProps) {
	const theme = useTheme();
	const translation = entry.translations["en-EN"];

	const dates = entry.isCurrent
		? `${entry.dateStart} - Present`
		: entry.dateEnd
			? `${entry.dateStart} - ${entry.dateEnd}`
			: entry.dateStart;

	return (
		<Box
			sx={{
				width: "100%",
				maxWidth: { xs: "100%", md: "75%" },
				marginLeft: "auto",
				marginRight: "auto",
				display: "flex",
				flexDirection: "column",
				gap: "35px",
				padding: "0 24px 32px",
			}}
		>
			<Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
				{entry.isCurrent && (
					<Box
						sx={{
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							alignSelf: "flex-start",
							padding: "4px 12px",
							borderRadius: "6px",
							fontSize: "13px",
							fontWeight: 600,
							color: theme.palette.success.main,
							backgroundColor: alpha(theme.palette.success.main, 0.15),
						}}
					>
						<Box
							sx={{
								width: "8px",
								height: "8px",
								borderRadius: "50%",
								backgroundColor: theme.palette.success.main,
							}}
						/>
						Current role
					</Box>
				)}

				<Typography
					sx={{
						fontSize: "26px",
						fontWeight: 600,
						lineHeight: 1.2,
						color: theme.palette.mode === "light" ? "black" : "white",
					}}
				>
					{entry.position}
				</Typography>

				<Typography
					sx={{
						fontSize: "15px",
						fontWeight: 500,
						color: theme.palette.primary.main,
					}}
				>
					{entry.companyName}
				</Typography>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
					}}
				>
					<Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
						{dates}
						{entry.wasInternship && " (internship)"}
					</Typography>
					<MapPin size={14} color={theme.palette.text.secondary} />
					<Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
						{entry.location}
					</Typography>
				</Box>
			</Box>

			<Typography
				sx={{
					fontSize: "15px",
					lineHeight: 1.6,
					color: theme.palette.mode === "light" ? "black" : "white",
				}}
			>
				{translation.longDescription}
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<SectionLabel>// RESPONSIBILITIES</SectionLabel>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "12px",
					}}
				>
					{translation.responsibilities.map((responsibility) => (
						<Box
							key={responsibility}
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
							}}
						>
							<Check
								size={18}
								color={theme.palette.primary.main}
								style={{ flexShrink: 0 }}
							/>
							<Typography
								sx={{
									fontSize: "14px",
									lineHeight: 1.5,
									color: theme.palette.text.secondary,
								}}
							>
								{responsibility}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<SectionLabel>// ACHIEVEMENTS</SectionLabel>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "12px",
					}}
				>
					{translation.achievements.map((achievement) => (
						<Box
							key={achievement}
							sx={{
								display: "flex",
								alignItems: "flex-start",
								gap: "12px",
								padding: "14px 16px",
								borderRadius: "8px",
								backgroundColor:
									theme.palette.mode === "light"
										? "white"
										: theme.palette.grey[600],
								border: `2px solid ${
									theme.palette.mode === "light"
										? theme.palette.grey[200]
										: theme.palette.grey[500]
								}`,
							}}
						>
							<Trophy
								size={18}
								color={theme.palette.warning.main}
								style={{ flexShrink: 0, marginTop: "2px" }}
							/>
							<Typography
								sx={{
									fontSize: "14px",
									lineHeight: 1.5,
									color: theme.palette.text.secondary,
								}}
							>
								{achievement}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<SectionLabel>// STACK & WORKING AREAS</SectionLabel>
				<Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
					{entry.stack.map((tech) => (
						<Box key={tech} sx={badgeSx(theme)}>
							{tech}
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}