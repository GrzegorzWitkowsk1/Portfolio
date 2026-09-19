import {
	alpha,
	Box,
	Button,
	IconButton,
	Typography,
	useTheme,
} from "@mui/material";
import {
	ChevronLeft,
	ChevronRight,
	Code,
	Key,
	SquareArrowOutUpRight,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectType } from "consts";
import { badgeSx } from "config/badge-style";
import { SectionLabel } from "components/section-label";
import { useLanguage } from "config/language/language-config";

type ProjectViewProps = {
	project: ProjectType;
};

export function ProjectView({ project }: ProjectViewProps) {
	const theme = useTheme();
	const { t } = useTranslation();
	const { lang } = useLanguage();
	const [imageIndex, setImageIndex] = useState(0);

	const images = project.images;
	const features =
		project.keyFeatures[lang] ?? project.keyFeatures["en-EN"] ?? [];
	const description = project.description[lang] ?? project.description["en-EN"];
	const longDescription =
		project.longDescription[lang] ?? project.longDescription["en-EN"];
	const showCarouselArrows = images.length > 1;

	const handlePrev = () => {
		setImageIndex((index) => (index - 1 + images.length) % images.length);
	};

	const handleNext = () => {
		setImageIndex((index) => (index + 1) % images.length);
	};

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
			<Box
				sx={{
					position: "relative",
					width: "100%",
					aspectRatio: "16 / 9",
					borderRadius: "8px",
					overflow: "hidden",
					border: `2px solid ${
						theme.palette.mode === "light"
							? theme.palette.grey[300]
							: theme.palette.grey[500]
					}`,
					"&:hover .carousel-arrow": {
						opacity: 1,
					},
				}}
			>
				<Box
					component="img"
					src={images[imageIndex]}
					alt={t("project::previewAlt", { title: project.title })}
					sx={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block",
					}}
				/>
				{showCarouselArrows && (
					<>
						<IconButton
							aria-label={t("project::previousImage")}
							className="carousel-arrow"
							onClick={handlePrev}
							sx={{
								position: "absolute",
								top: "50%",
								left: "12px",
								transform: "translateY(-50%)",
								opacity: 0,
								transition: "opacity 0.2s ease",
								backgroundColor: "rgba(0, 0, 0, 0.45)",
								color: "white",
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.6)",
								},
							}}
						>
							<ChevronLeft size={22} />
						</IconButton>
						<IconButton
							aria-label={t("project::nextImage")}
							className="carousel-arrow"
							onClick={handleNext}
							sx={{
								position: "absolute",
								top: "50%",
								right: "12px",
								transform: "translateY(-50%)",
								opacity: 0,
								transition: "opacity 0.2s ease",
								backgroundColor: "rgba(0, 0, 0, 0.45)",
								color: "white",
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.6)",
								},
							}}
						>
							<ChevronRight size={22} />
						</IconButton>
					</>
				)}
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: { xs: "flex-start", md: "center" },
					justifyContent: "space-between",
					gap: "18px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "6px",
					}}
				>
					<Typography
						sx={{
							fontSize: "26px",
							fontWeight: 600,
							lineHeight: 1.2,
							color: theme.palette.mode === "light" ? "black" : "white",
						}}
					>
						{project.title}
					</Typography>
					<Typography
						sx={{
							fontSize: "15px",
							fontWeight: 500,
							color: theme.palette.primary.main,
						}}
					>
						{description}
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						gap: "12px",
					}}
				>
					<Button
						component="a"
						href={project.codeUrl}
						target="_blank"
						rel="noopener noreferrer"
						disabled={!project.codeUrl}
						variant="contained"
						startIcon={<Code size={18} />}
						sx={{
							paddingX: "18px",
							paddingY: "10px",
							fontSize: "14px",
							fontWeight: 600,
							textTransform: "none",
							borderRadius: "10px",
							backgroundColor:
								theme.palette.mode === "light"
									? theme.palette.grey[300]
									: theme.palette.grey[500],
							color:
								theme.palette.mode === "light"
									? theme.palette.grey[800]
									: theme.palette.grey[100],
							"&:hover": {
								backgroundColor:
									theme.palette.mode === "light"
										? theme.palette.grey[400]
										: theme.palette.grey[400],
							},
						}}
					>
						{t("project::code")}
					</Button>
					<Button
						component="a"
						href={project.demoUrl}
						target="_blank"
						rel="noopener noreferrer"
						disabled={!project.demoUrl}
						variant="contained"
						startIcon={<SquareArrowOutUpRight size={18} />}
						sx={{
							paddingX: "18px",
							paddingY: "10px",
							fontSize: "14px",
							fontWeight: 600,
							textTransform: "none",
							borderRadius: "10px",
							backgroundColor: theme.palette.primary.main,
							color: theme.palette.primary.contrastText,
							"&:hover": {
								backgroundColor: theme.palette.primary.dark,
							},
						}}
					>
						{t("project::demo")}
					</Button>
				</Box>
			</Box>

			{project.startDate && (
				<Box
					sx={{
						display: "inline-flex",
						alignSelf: "flex-start",
					}}
				>
					<Box sx={badgeSx(theme)}>{project.startDate}</Box>
				</Box>
			)}

			<Typography
				sx={{
					fontSize: "15px",
					lineHeight: 1.6,
					color: theme.palette.text.secondary,
				}}
			>
				{longDescription}
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<SectionLabel>{t("project::stack")}</SectionLabel>
				<Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
					{project.technologies.map((tech) => (
						<Box key={tech} sx={badgeSx(theme)}>
							{tech}
						</Box>
					))}
				</Box>
			</Box>

			{features.length > 0 && (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "16px",
					}}
				>
					<SectionLabel>{t("project::keyFeatures")}</SectionLabel>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "12px",
						}}
					>
						{features.map((feature) => (
							<Box
								key={feature}
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "28px",
										height: "28px",
										borderRadius: "6px",
										flexShrink: 0,
										backgroundColor: alpha(theme.palette.primary.main, 0.12),
									}}
								>
									<Key size={16} color={theme.palette.primary.main} />
								</Box>
								<Typography
									sx={{
										fontSize: "14px",
										lineHeight: 1.5,
										color: theme.palette.text.secondary,
									}}
								>
									{feature}
								</Typography>
							</Box>
						))}
					</Box>
				</Box>
			)}
		</Box>
	);
}
