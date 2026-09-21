import cv from "assets/files/Grzegorz Witkowski - Frontend Developer.pdf";

export type AboutLinkType = {
	label: string;
	handle: string;
	href: string;
	download: boolean;
};

export const about = {
	name: "Grzegorz Witkowski",
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
