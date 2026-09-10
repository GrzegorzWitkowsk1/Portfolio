export type ProjectType = {
	title: string;
	description: {
		[key: string]: string;
	};
	technologies: string[];
	codeUrl?: string;
	image?: string;
	imageAlt: string;
	imageObjectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
	imageObjectPosition?: string;
	demoUrl?: string;
};
