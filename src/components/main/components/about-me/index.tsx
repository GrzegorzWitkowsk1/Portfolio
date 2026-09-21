import { Box, Typography, useTheme } from "@mui/material";
import { Clock, MapPin, Target, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import polyMyImage from "assets/images/poly-my-image.jpeg";
import { about } from "config/about-data";
import { badgeSx } from "config/badge-style";
import { SectionLabel } from "components/section-label";
import { AvailabilityDot } from "components/availability-dot";
import { InfoCard } from "./components/info-card";
import { LinkCard } from "./components/link-card";

type InfoCardType = {
	title: string;
	value: string;
	icon: LucideIcon;
};

const linkLabelKey: Record<string, string> = {
	Github: "aboutMe::links::github",
	Linkedin: "aboutMe::links::linkedin",
	CV: "aboutMe::links::cv",
	Email: "aboutMe::links::email",
};

export function AboutMe() {
	const theme = useTheme();
	const { t } = useTranslation();

	const infoCards: InfoCardType[] = [
		{
			title: t("aboutMe::info::location::title"),
			value: t("aboutMe::info::location::value"),
			icon: MapPin,
		},
		{
			title: t("aboutMe::info::experience::title"),
			value: t("aboutMe::info::experience::value"),
			icon: Clock,
		},
		{
			title: t("aboutMe::info::focus::title"),
			value: t("aboutMe::info::focus::value"),
			icon: Target,
		},
	];

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
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: { xs: "flex-start", md: "center" },
					gap: "18px",
					textAlign: "left",
				}}
			>
				<Box
					component="img"
					src={polyMyImage}
					alt={t("aboutMe::altPhoto")}
					sx={{
						width: { xs: "95px", md: "120px" },
						height: { xs: "95px", md: "120px" },
						flexShrink: 0,
						borderRadius: "14px",
						objectFit: "cover",
					}}
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-start",
							gap: "6px",
						}}
					>
						<AvailabilityDot />
						<Typography
							sx={{
								fontSize: "13px",
								color: theme.palette.success.main,
								fontWeight: 500,
							}}
						>
							{t("aboutMe::availability")}
						</Typography>
					</Box>
					<Typography
						sx={{
							fontSize: "26px",
							fontWeight: 600,
							lineHeight: 1.2,
							color: theme.palette.mode === "light" ? "black" : "white",
						}}
					>
						{about.name}
					</Typography>
					<Typography
						sx={{
							fontSize: "17px",
							fontWeight: 500,
							color: theme.palette.primary.main,
						}}
					>
						{t("aboutMe::role")}
					</Typography>
				</Box>
			</Box>

			<Typography
				sx={{
					fontSize: "15px",
					lineHeight: 1.6,
					color: "text.secondary",
				}}
			>
				{t("aboutMe::description")}
			</Typography>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
					gap: "16px",
				}}
			>
				{infoCards.map((card) => {
					const Icon = card.icon;
					return (
						<InfoCard
							key={card.title}
							icon={<Icon size={20} color={theme.palette.primary.main} />}
							title={card.title}
							value={card.value}
						/>
					);
				})}
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<SectionLabel>{t("aboutMe::sections::technologies")}</SectionLabel>
				<Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
					{about.technologies.map((tech) => (
						<Box key={tech} sx={badgeSx(theme)}>
							{tech}
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
				<SectionLabel>{t("aboutMe::sections::beyondTheCode")}</SectionLabel>
				<Typography
					sx={{
						fontSize: "15px",
						lineHeight: 1.6,
						color: "text.secondary",
					}}
				>
					{t("aboutMe::beyondTheCode")}
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<SectionLabel>{t("aboutMe::sections::links")}</SectionLabel>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
						gap: "16px",
					}}
				>
					{about.links.map((link) => (
						<LinkCard
							key={link.label}
							label={t(linkLabelKey[link.label])}
							handle={link.handle}
							href={link.href}
							download={link.download}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
}
