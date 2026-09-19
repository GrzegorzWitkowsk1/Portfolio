export type HomeFileEntry = {
	dateStart?: string;
	dateEnd?: string | null;
	description: string;
};

export const homeContent: Record<string, HomeFileEntry> = {
	"about-me.tsx": {
		description: "Short introduction to who I am and what I do.",
	},
	"new-message.tsx": {
		description: "Contact form — drop me a message.",
	},
	"projects/motorro.md": {
		description:
			"App for the automotive industry — comparing and ordering parts from wholesalers.",
	},
	"projects/rezerwik.md": {
		description:
			"Restaurant and services app managing reservations and orders.",
	},
	"projects/moviemark.md": {
		description: "Personal movie and TV series tracking app built on TMDB.",
	},
	"projects/filbruk.md": {
		description:
			"Business portfolio app showcasing company info, services and contact.",
	},
	"projects/portfolio.md": {
		description: "This portfolio app — experience, projects and contact.",
	},
	"projects/extensions.md": {
		description: "Browser extensions for scraping, redirects and automation.",
	},
	"projects/statistics-app.md": {
		description:
			"React app fetching data and rendering charts with ApexCharts.",
	},
	"work-experience/power-technology.md": {
		dateStart: "06.2026",
		dateEnd: null,
		description:
			"Senior Frontend Developer — maintaining and developing a React app.",
	},
	"work-experience/motorro.md": {
		dateStart: "08.2021",
		dateEnd: null,
		description:
			"Mid/Senior Frontend Developer — React app and web extensions from scratch.",
	},
	"work-experience/mca-ware.md": {
		dateStart: "09.2024",
		dateEnd: null,
		description: "Mid/Senior Frontend Developer — React JS app.",
	},
	"work-experience/memogadget.md": {
		dateStart: "2015",
		dateEnd: null,
		description: "Erasmus internship in an e-commerce company.",
	},
	"work-experience/liquid-systems.md": {
		dateStart: "",
		dateEnd: "",
		description: "Service technician — optical fiber internet and TV services.",
	},
};

export function formatHomeEntry(entry: HomeFileEntry): string {
	const { dateStart, dateEnd, description } = entry;
	const start = dateStart && dateStart.trim();
	const end = dateEnd && dateEnd.trim();

	if (start) {
		if (end) {
			return `${start} - ${end} · ${description}`;
		}
		return `${start} · ${description}`;
	}
	return description;
}
