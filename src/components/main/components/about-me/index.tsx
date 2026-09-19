import { Box, styled, Typography, useTheme } from "@mui/material";
import { Clock, MapPin, Target, type LucideIcon } from "lucide-react";
import polyMyImage from "assets/images/poly-my-image.jpeg";
import cv from "assets/files/Grzegorz Witkowski - Frontend Developer.pdf";
import { badgeSx } from "config/badge-style";
import { AvailabilityDot } from "components/availability-dot";
import { InfoCard } from "./components/info-card";
import { LinkCard } from "./components/link-card";

type InfoCardType = {
	title: string;
	value: string;
	icon: LucideIcon;
};

const infoCards: InfoCardType[] = [
	{ title: "LOCATION", value: "Lublin, Poland (or remote)", icon: MapPin },
	{ title: "EXPERIENCE", value: "5+ years", icon: Clock },
	{
		title: "FOCUS",
		value: "Frontend engineering & design systems",
		icon: Target,
	},
];

const about = {
	name: "Grzegorz Witkowski",
	availability: "Available for work",
	role: "Frontend developer",
	description:
		"I'm a frontend developer focused on building fast, accessible and well-structured web applications. I care about clean code, good UX and delivering value through simple, maintainable solutions.",
	beyondTheCode:
		"Outside of work you can find me working on my private projects, reading books and watching fight sports - Shortly, enjoying my life.",
	technologies: [
		"React",
		"TypeScript",
		"Next JS",
		"Tailwind CSS",
		"Monorepo",
		"CI/CD",
		"Material UI",
		"React Query",
		"React Context",
		"React Router",
		"Git",
		"Github",
		"Github Actions",
		"Copilot",
		"Claude",
		"Opencode",
		"Jest",
		"Vitest",
		"Playwright",
		"Fastify",
		"Mongoose",
		"Manifest v2/v3",
	],
	infoCards,
links: [
		{
			label: "Github",
			handle: "/GrzegorzWitkowsk1",
			href: "https://github.com/GrzegorzWitkowsk1",
			download: false,
		},
		{
			label: "Linkedin",
			handle: "/in/grzegorz-witkowski-b0b11a234",
			href: "https://www.linkedin.com/in/grzegorz-witkowski-b0b11a234/",
			download: false,
		},
		{
			label: "CV",
			handle: "Grzegorz Witkowski",
			href: cv,
			download: true,
		},
		{
			label: "Email",
			handle: "grzegorz.witkowski999@gmail.com",
			href: "mailto:grzegorz.witkowski999@gmail.com",
			download: false,
		},
	],
};

const SectionLabel = styled(Typography)(({ theme }) => ({
	fontSize: "17px",
	fontWeight: 600,
	letterSpacing: "0.5px",
	textTransform: "uppercase",
	color:
		theme.palette.mode === "light"
			? theme.palette.grey[500]
			: theme.palette.grey[100],
}));

export function AboutMe() {
	const theme = useTheme();

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
					alignItems: {xs:'flex-start', md:'center'},
					gap: "18px",
					textAlign: 'left',
				}}
			>
				<Box
					component="img"
					src={polyMyImage}
					alt="My photo"
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
							justifyContent: 'flex-start',
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
							{about.availability}
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
						{about.role}
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
				{about.description}
			</Typography>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
					gap: "16px",
				}}
			>
				{about.infoCards.map((card) => {
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
				<SectionLabel>// TECHNOLOGIES</SectionLabel>
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
				<SectionLabel>// Beyond the code</SectionLabel>
				<Typography
					sx={{
						fontSize: "15px",
						lineHeight: 1.6,
						color: "text.secondary",
					}}
				>
					{about.beyondTheCode}
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<SectionLabel>// Links</SectionLabel>
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
							label={link.label}
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
