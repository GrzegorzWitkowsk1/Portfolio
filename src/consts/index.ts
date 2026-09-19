import filbrukBackground from "assets/images/project-filbruk-background.png";
import portfolioBackground from "assets/images/banner_linkedIn.png";

export type WorkExperienceEntryType = {
	companyName: string;
	position: string;
	location: string;
	sidebarName: string;
	dateStart: string;
	isCurrent: boolean;
	wasInternship: boolean;
	dateEnd: string;
	stack: string[];
	translations: {
		[key: string]: {
			description: string;
			longDescription: string;
			responsibilities: string[];
			achievements: string[];
		};
	};
};

export type ProjectType = {
	title: string;
	sidebarName: string;
	description: {
		[key: string]: string;
	};
	longDescription: {
		[key: string]: string;
	};
	images: string[];
	keyFeatures: {
		[key: string]: string[];
	};
	technologies: string[];
	codeUrl?: string;
	demoUrl?: string;
};

export const workExperience: WorkExperienceEntryType[] = [
	{
		companyName: "Power Technology P.S.A.",
		position: "Senior Frontend Developer",
		location: "Poland",
		sidebarName: "power-technology.md",
		dateStart: "06.2026",
		dateEnd: "",
		isCurrent: true,
		wasInternship: false,
		stack: ["React", "TypeScript", "React Query", "Material UI"],
		translations: {
			"pl-PL": {
				description:
					"Utrzymywanie i rozwijanie aplikacji React. Wdrażanie nowych funkcjonalności i poprawek.",
				longDescription:
					"Utrzymywanie i rozwijanie produkcyjnych aplikacji React. Dostarczanie nowych widoków i funkcji interfejsu użytkownika, systematyczna refaktoryzacja kodu oraz redukcja długu technicznego. Wprowadzenie React Query poprawiło zarządzanie stanem serwera, buforowanie i synchronizację danych API. Wsparcie zespołu narzędziami opartymi o AI w codziennej pracy nad implementacją, refaktoryzacją, debugowaniem i analizą kodu.",
				responsibilities: [
					"Przyspieszenia rozwoju produktu poprzez dostarczanie nowych widoków i funkcji interfejsu użytkownika z wykorzystaniem React i TypeScript.",
					"Poprawienie łatwości utrzymania aplikacji dzięki systematycznej refaktoryzacji kodu i redukcji długu technicznego.",
					"Wprowadzenie React Query, aby usprawnić zarządzanie stanem serwera, buforowanie i synchronizację danych API.",
					"Wspomaganie dziennej pracy narzędziami związanymi ze sztuczną inteligencją (opencode, codex, github copilot), aby zwiększyć produktywność w zakresie implementacji, refaktoryzacji, debugowania i analizy kodu.",
				],
				achievements: [
					"Dostarczanie nowych widoków i funkcji UI przyspieszających rozwój produktu.",
					"Redukcja długu technicznego dzięki systematycznej refaktoryzacji kodu.",
					"Wprowadzenie React Query poprawiające zarządzanie stanem serwera, buforowanie i synchronizację API.",
					"Integracja narzędzi AI (opencode, codex, github copilot) w codzienny workflow.",
				],
			},
			"en-EN": {
				description:
					"Maintaining and developing react App. Providing new features and bug fixes.",
				longDescription:
					"Maintaining and developing production React applications. Delivering new UI views and features, systematically refactoring the codebase and reducing technical debt. Introducing React Query improved server-state management, caching and API data synchronization. Supporting the team with AI-assisted tooling for daily implementation, refactoring, debugging and code analysis.",
				responsibilities: [
					"Contributed to accelerating product development by delivering new UI views and features using React and TypeScript.",
					"Improved application maintainability through systematic code refactoring and reduction of technical debt.",
					"Introduced React Query to improve server-state management, caching, and API data synchronization.",
					"Integrated AI-assisted development into the daily workflow to improve productivity across implementation, refactoring, debugging, and code analysis.",
				],
				achievements: [
					"Delivered new UI views and features that accelerated product development.",
					"Reduced technical debt through systematic code refactoring.",
					"Introduced React Query, improving server-state management, caching and API synchronization.",
					"Integrated AI-assisted tools (opencode, codex, github copilot) into the daily workflow.",
				],
			},
		},
	},
	{
		companyName: "Motorro Sp. z.o.o",
		position: "Mid/Senior Frontend Developer",
		location: "Poland",
		sidebarName: "motorro.md",
		dateStart: "08.2021",
		dateEnd: "",
		isCurrent: true,
		wasInternship: false,
		stack: ["React JS", "TypeScript", "Web Extensions", "Admin Panel"],
		translations: {
			"pl-PL": {
				description:
					"Utrzymywanie i rozwijanie aplikacji React i rozszerzeń internetowych. Mentorowanie młodszych kolegów.",
				longDescription:
					"Zbudowany od podstaw i rozwijany przez cały cykl życia aplikacji React JS oraz rozszerzenia przeglądarkowe. Odpowiedzialność za architekturę, implementację i utrzymanie całej aplikacji, w tym stworzenie panelu administracyjnego do zarządzania treściami. Poza pracą techniczną — mentoring młodszych developerów oraz prowadzenie zespołu: rozdzielanie zadań, prowadzenie spotkań i dbanie o płynność pracy.",
				responsibilities: [
					"Utrzymywanie i rozwijanie całej aplikacji React JS stworzonej przeze mnie od podstaw.",
					"Stworzenie panelu administracyjnego do zarządzania treściami w aplikacji",
					"Mentoring nad młodszymi deweloperami",
					"Prowadzenie zespołu. Rozdzielanie zadań, prowadzenie spotkań i dbanie o płynność pracy.",
				],
				achievements: [
					"Zbudowanie aplikacji React od podstaw i utrzymywanie jej przez cały cykl życia.",
					"Stworzenie panelu administracyjnego do zarządzania treściami.",
					"Dostarczenie rozszerzeń przeglądarkowych obok głównej aplikacji.",
					"Mentoring młodszych developerów i prowadzenie zespołu.",
				],
			},
			"en-EN": {
				description:
					"Maintaining and developing react App and web extensions. Mentored younger colleagues.",
				longDescription:
					"Built a React JS application from scratch and maintained it across its full lifecycle, along with browser web extensions. Responsible for the architecture, implementation and upkeep of the whole application, including a content-management admin panel. Beyond technical work, mentored junior developers and led the team by distributing tasks, running meetings and keeping work flowing on schedule.",
				responsibilities: [
					"Maintaining and developing whole React JS app from scratch.",
					"Implemented admin panel",
					"Mentoring junior dev",
					"Lead team. Distribute tasks, lead meetings and take care of tasks flow.",
				],
				achievements: [
					"Built a React application from scratch and maintained it end-to-end.",
					"Implemented an admin panel for content management.",
					"Delivered web extensions alongside the main application.",
					"Mentored junior developers and led the team to a stable delivery flow.",
				],
			},
		},
	},
	{
		companyName: "MCA - WARE MIRON BALCERZAK",
		position: "Mid/Senior Frontend Developer",
		location: "Poland",
		sidebarName: "mca-ware.md",
		dateStart: "09.2024",
		dateEnd: "",
		isCurrent: true,
		wasInternship: false,
		stack: ["React JS"],
		translations: {
			"pl-PL": {
				description: "Utrzymywanie i rozwijanie aplikacji React JS.",
				longDescription:
					"Utrzymywanie i rozwijanie aplikacji React JS stworzonej od podstaw. Dostarczanie nowych funkcjonalności i poprawek wspierających codzienną działalność operacyjną firmy oraz dbanie o jakość i stabilność kodu.",
				responsibilities: [
					"Utrzymywanie i rozwijanie całej aplikacji React JS stworzonej przeze mnie od podstaw.",
				],
				achievements: [
					"Utrzymywanie i rozwijanie aplikacji React JS stworzonej od podstaw.",
					"Dostarczanie funkcjonalności wspierających codzienną działalność firmy.",
				],
			},
			"en-EN": {
				description: "Maintaining and developing react App.",
				longDescription:
					"Maintaining and developing a React JS application built from scratch. Delivering new features and fixes that support everyday business operations while keeping the codebase healthy and stable.",
				responsibilities: [
					"Maintaining and developing React JS app from scratch.",
				],
				achievements: [
					"Maintained and evolved a React JS application built from scratch.",
					"Delivered features supporting everyday business operations.",
				],
			},
		},
	},
	{
		companyName: "memogadget.com",
		position: "Erasmus internship",
		location: "Poland",
		sidebarName: "memogadget.md",
		dateStart: "2015",
		dateEnd: "",
		isCurrent: false,
		wasInternship: true,
		stack: ["E-commerce", "SEO", "VR"],
		translations: {
			"pl-PL": {
				description:
					"Staż w ramach programu Erasmus w firmie z branży e-commerce.",
				longDescription:
					"Staż w ramach programu Erasmus w firmie z branży e-commerce, z naciskiem na główną stronę firmy. Przygotowywanie polskich tłumaczeń, udział w dyskusjach o funkcjach i poprawkach, nauka o wydajności e-commerce i pozycjonowaniu w wyszukiwarkach oraz próby znalezienia zastosowań dla VR w platformach e-commerce.",
				responsibilities: [
					"Tworzenie polskich tłumaczeń na głównej stronie firmy",
					"Uczestnictwo w dyskusjach o funkcjach i poprawkach w aplikacji",
					"Nauka o e-commerce, performence aplikacji i pozycjonowaniu w przeglądrkach",
					"Próby znalezienia zastosowania dla VR w platformach e-commerce",
				],
				achievements: [
					"Przygotowanie polskich tłumaczeń na głównej stronie firmy.",
					"Udział w dyskusjach o funkcjach i poprawkach aplikacji.",
					"Nauka o wydajności e-commerce i pozycjonowaniu w wyszukiwarkach.",
					"Eksperymenty z zastosowaniem VR w platformach e-commerce.",
				],
			},
			"en-EN": {
				description: "Erasmus intership in e-commerce company.",
				longDescription:
					"Erasmus internship at an e-commerce company, focused on its main website. Prepared Polish translations, took part in feature and bug-fix discussions, learned about e-commerce performance and search positioning, and investigated how VR could be applied to e-commerce platforms.",
				responsibilities: [
					"Making polish translations on main website of company",
					"Participating in discussions about features and fixes",
					"Learning about e-commerce, accelerating apps and google positioning",
					"Trying to find a use for VR in e-commerce platforms",
				],
				achievements: [
					"Prepared Polish translations for the company's main website.",
					"Contributed to feature and bug-fix discussions.",
					"Learned about e-commerce performance and search positioning.",
					"Explored VR use-cases for e-commerce platforms.",
				],
			},
		},
	},
	{
		companyName: "Liquid Systems Sp. z.o.o",
		position: "Service technician",
		location: "Poland",
		sidebarName: "liquid-systems.md",
		dateStart: "",
		dateEnd: "",
		isCurrent: false,
		wasInternship: true,
		stack: ["Fiber optics", "Customer support", "Helpdesk"],
		translations: {
			"pl-PL": {
				description:
					"Świadczenie usług związanych z instalacją internetu światłowodowego i telewizji.",
				longDescription:
					"Stanowisko serwisowe w zakresie dostarczania internetu światłowodowego i telewizji. Instalacje sprzętu u klientów, obsługa biura obsługi klienta oraz praca z klientami — rozwiązywanie problemów i udzielanie informacji o usłudze.",
				responsibilities: [
					"Instalacje sprzętu do świadczenia usług internetu światłowodowego dla klientów",
					"Biuro obsługi klienta",
					"Praca z klientami, rozwiązywanie problemów i udzielanie informacji o usłudze.",
				],
				achievements: [
					"Instalacje sprzętu światłowodowego i telewizyjnego dla klientów.",
					"Rozwiązywanie problemów klientów i udzielanie informacji o usługach na helpdesku.",
				],
			},
			"en-EN": {
				description: "Providing optical fiber internet and tv services.",
				longDescription:
					"Field service role delivering optical fiber internet and TV installations. Handled equipment installations for customers, helped at the helpdesk and worked directly with clients to solve issues and explain the service.",
				responsibilities: [
					"Installations of hardware to get optical fiber internet for customers",
					"Helpdesk",
					"Working with customers, problem solving and providing informations about service.",
				],
				achievements: [
					"Installed fiber internet and TV equipment for customers.",
					"Resolved customer issues and answered service questions on the helpdesk.",
				],
			},
		},
	},
];

export const projects: ProjectType[] = [
	{
		title: "Motorro",
		sidebarName: "motorro.md",
		description: {
			"en-EN":
				"An app for the automotive industry. Comparing and ordering parts from automotive wholesalers.",
			"pl-PL":
				"Aplikacja dla branży motoryzacyjnej. Porównywanie i zamawianie części od hurtowni motoryzacyjnych.",
		},
		longDescription: {
			"en-EN":
				"Motorro is a business application for the automotive industry that connects workshops with automotive wholesalers. It aggregates parts catalogs from multiple suppliers, letting users compare prices and availability side by side and place orders directly from the app. Powered by a realtime connection, the app stays in sync with warehouse stock and order statuses without manual refreshing.",
			"pl-PL":
				"Motorro to aplikacja biznesowa dla branży motoryzacyjnej, łącząca warsztaty z hurtowniami części zamiennych. Agreguje katalogi części od wielu dostawców, umożliwiając porównywanie cen i dostępności oraz składanie zamówień bezpośrednio w aplikacji. Dzięki połączeniu w czasie rzeczywistym aplikacja pozostaje zsynchronizowana ze stanami magazynowymi i statusami zamówień bez ręcznego odświeżania.",
		},
		images: [
			"https://cdn.pracahandlowiec.pl/uploads/image/motorro-logo-e32036fd-e336-46fa-8851-d2534e845247.png",
		],
		keyFeatures: {
			"en-EN": [
				"Compare parts across multiple automotive wholesalers",
				"Search and order parts directly in the app",
				"Realtime stock availability via websockets",
				"Server state management with React Query",
				"Order status tracking",
			],
			"pl-PL": [
				"Porównywanie części od wielu hurtowni motoryzacyjnych",
				"Wyszukiwanie i zamawianie części bezpośrednio w aplikacji",
				"Dostępność magazynowa w czasie rzeczywistym dzięki websocketom",
				"Zarządzanie stanem serwera z React Query",
				"Śledzenie statusu zamówień",
			],
		},
		technologies: [
			"React JS",
			"Typescript",
			"Material UI",
			"React Query",
			"Websockets",
			"Refactor",
		],
		demoUrl: "https://app.motorro.eu/",
	},
	{
		title: "Rezerwik",
		sidebarName: "rezerwik.md",
		description: {
			"en-EN":
				"An app for restaurant and services. Both sides (customer and owner) app for managing reservations and orders.",
			"pl-PL":
				"Aplikacja dla restauracji i usług. Aplikacja dla obu stron (klienta i właściciela) do zarządzania rezerwacjami i zamówieniami.",
		},
		longDescription: {
			"en-EN":
				"Rezerwik is a two-sided reservation and ordering platform built for restaurants and service businesses. A customer-facing app lets guests book tables, manage reservations and place orders, while an owner panel handles menus, availability and incoming bookings from a single dashboard.",
			"pl-PL":
				"Rezerwik to dwustronna platforma rezerwacyjno-zamówieniowa dla restauracji i firm usługowych. Aplikacja dla klientów pozwala rezerwować stoliki, zarządzać rezerwacjami i składać zamówienia, natomiast panel właściciela obsługuje menu, dostępność i przychodzące rezerwacje z jednego pulpitu.",
		},
		images: [
			"https://lodz.travel/files/public/_processed_/a/b/csm_Restauracja_Farina_Bianco_Restaurant_Lodz_Lodz_polska_poland_convention_bureau_mice__2__341ef4e7cb.jpg",
		],
		keyFeatures: {
			"en-EN": [
				"Two-sided experience (customer and owner)",
				"Table reservations and online booking",
				"Ordering from restaurants and services",
				"Integrated payments with Stripe",
				"Location search with Open Street Maps",
			],
			"pl-PL": [
				"Dwustronne doświadczenie (klient i właściciel)",
				"Rezerwacje stolików i rezerwacje online",
				"Zamawianie w restauracjach i usługach",
				"Płatności zintegrowane z Stripe",
				"Wyszukiwanie lokalizacji z Open Street Maps",
			],
		},
		technologies: [
			"React JS",
			"Typescript",
			"Material UI",
			"React Query",
			"Stripe",
			"Open Street Maps",
		],
	},
	{
		title: "MovieMark",
		sidebarName: "moviemark.md",
		description: {
			"en-EN":
				'MovieMark is a personal movie and TV series tracking web app. It lets you browse content from TMDB, mark films and shows as watched, keep a "want to watch" list, and track your episodes season by season — all in a fast, modern, fully internationalized interface.Built as a Turborepo monorepo and managed with Bun.',
			"pl-PL":
				'MovieMark to osobista aplikacja internetowa do śledzenia filmów i seriali. Pozwala przeglądać treści z TMDB, oznaczać filmy i programy jako obejrzane, prowadzić listę "chcę obejrzeć" i śledzić odcinki sezon po sezonie — wszystko w szybkim, nowoczesnym, w pełni dostosowanym interfejsie. Aplikacja zbudowana w oparciu o Turborepo i zarządzana za pomocą Bun.',
		},
		longDescription: {
			"en-EN":
				"MovieMark is a personal movie and TV series tracking web app built around the TMDB catalog. Users can browse titles, mark films and shows as watched, maintain a want-to-watch list and follow episodes season by season. The app is organized as a Turborepo monorepo managed with Bun, combining a React 19 frontend, a Fastify REST API and MongoDB persistence, covered end-to-end by unit, integration and e2e tests.",
			"pl-PL":
				"MovieMark to osobista aplikacja internetowa do śledzenia filmów i seriali, zbudowana wokół katalogu TMDB. Użytkownik może przeglądać tytuły, oznaczać filmy i programy jako obejrzane, prowadzić listę „chcę obejrzeć” oraz śledzić odcinki sezon po sezonie. Aplikacja jest zorganizowana jako monorepo Turborepo zarządzane przez Bun, łączące frontend React 19, API REST Fastify i bazę MongoDB, pokryte kompleksowo testami jednostkowymi, integracyjnymi i e2e.",
		},
		images: [
			"https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png",
		],
		keyFeatures: {
			"en-EN": [
				"Browse content from the TMDB API",
				"Mark films and series as watched",
				"Want-to-watch watchlist",
				"Season-by-season episode tracking",
				"Full i18n support",
				"Monorepo built with Turborepo and Bun",
			],
			"pl-PL": [
				"Przeglądanie treści z API TMDB",
				"Oznaczanie filmów i seriali jako obejrzane",
				"Lista „chcę obejrzeć”",
				"Śledzenie odcinków sezon po sezonie",
				"Pełne wsparcie i18n",
				"Monorepo z Turborepo i Bun",
			],
		},
		technologies: [
			"React 19",
			"Typescript 6",
			"Material UI",
			"Fastify",
			"MongoDB",
			"Mongoose",
			"Zod",
			"React hook form",
			"Vitest + MSW",
			"RTL",
			"playwright",
			"React Query",
			"TMDB API",
			"Bun",
			"Turborepo",
			"Mongo Atlas",
			"Render",
			"Cloudflare Pages",
		],
		codeUrl: "https://github.com/GrzegorzWitkowsk1/moviemark",
		demoUrl: "https://moviemark.grzegorz-witkowski.workers.dev",
	},
	{
		title: "Filbruk - Business app",
		sidebarName: "filbruk.md",
		description: {
			"en-EN":
				"A business portfolio application. Showcasing company information, services and contact details.",
			"pl-PL":
				"Aplikacja portfolio dla firmy. Prezentacja informacji o firmie, usług i danych kontaktowych.",
		},
		longDescription: {
			"en-EN":
				"Filbruk is a business portfolio website that presents a company's offer and contact information in a clean, conversion-focused layout. It communicates the services clearly, guides visitors toward the contact details and is deployed to Cloudflare Pages.",
			"pl-PL":
				"Filbruk to firmowa aplikacja portfolio prezentująca ofertę firmy i dane kontaktowe w czytelnym układzie nastawionym na konwersję. W jasny sposób komunikuje usługi, prowadzi odwiedzających do danych kontaktowych i jest wdrożona na Cloudflare Pages.",
		},
		images: [filbrukBackground],
		keyFeatures: {
			"en-EN": [
				"Company services showcase",
				"Contact details section",
				"Business-first, conversion-focused design",
				"Deployed on Cloudflare Pages",
			],
			"pl-PL": [
				"Prezentacja usług firmy",
				"Sekcja danych kontaktowych",
				"Układ biznesowy nastawiony na konwersję",
				"Wdrożenie na Cloudflare Pages",
			],
		},
		technologies: [
			"React JS",
			"Vite",
			"TailWind CSS",
			"Lovable",
			"Cloudflare Pages",
		],
		demoUrl: "https://filbruk.pl/",
	},
	{
		title: "Portfolio Application",
		sidebarName: "portfolio.md",
		description: {
			"en-EN":
				"My personal portfolio application. Showcasing my work experience, projects and contact details.",
			"pl-PL":
				"Moja osobista aplikacja portfolio. Prezentacja mojego doświadczenia zawodowego, projektów i danych kontaktowych.",
		},
		longDescription: {
			"en-EN":
				"My personal portfolio application built as a terminal-inspired IDE. It presents work experience, projects and contact details through a familiar code-editor interface with sidebar file navigation, open tabs and a home workspace for exploring the content.",
			"pl-PL":
				"Moja osobista aplikacja portfolio w stylu inspirowanym terminalem i IDE. Prezentuje doświadczenie zawodowe, projekty i dane kontaktowe w interfejsie nawiązującym do edytora kodu — z nawigacją plików w panelu bocznym, otwartymi zakładkami i ekranem głównym workspace.",
		},
		images: [portfolioBackground],
		keyFeatures: {
			"en-EN": [
				"IDE-style interface with sidebar and tabs",
				"Projects and work experience browsing",
				"Internationalized (EN/PL)",
				"Deployed on GitHub Pages",
			],
			"pl-PL": [
				"Interfejs w stylu IDE z panelem bocznym i zakładkami",
				"Przeglądanie projektów i doświadczenia zawodowego",
				"Wersja językowa (EN/PL)",
				"Wdrożenie na GitHub Pages",
			],
		},
		technologies: [
			"React JS",
			"TypeScript",
			"Material UI",
			"react-i18next",
			"Create React App",
			"GitHub Pages",
		],
		demoUrl: "https://grzegorzwitkowsk1.github.io/Portfolio/",
		codeUrl: "https://github.com/GrzegorzWitkowsk1/Portfolio",
	},
	{
		title: "Chrome and firefox extensions",
		sidebarName: "extensions.md",
		description: {
			"en-EN":
				"Few different extensions in pure javascript. Extensions was created to get informations from website, make different redirects or automative activities casually performed by user.",
			"pl-PL":
				"Kilka różnych rozszerzeń w czystym javascript. Rozszerzenia zostały stworzone do pobierania informacji ze stron, wykonywania różnych przekierowań lub automatyzacji czynności wykonywanych przez użytkownika.",
		},
		longDescription: {
			"en-EN":
				"A set of browser extensions written in vanilla JavaScript for both Chrome and Firefox. The extensions extract information from websites, perform configurable redirects and automate repetitive actions a user performs casually, built on both modern and legacy browser extension manifest APIs.",
			"pl-PL":
				"Zestaw rozszerzeń przeglądarkowych napisanych w czystym JavaScript dla Chrome i Firefox. Rozszerzenia pobierają informacje ze stron internetowych, wykonują konfigurowalne przekierowania oraz automatyzują powtarzalne czynności wykonywane przez użytkownika, zbudowane w oparciu o nowoczesne i starsze wersje API manifestu rozszerzeń.",
		},
		images: [
			"https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg0jbggprefkbd0bzrcwy.png",
		],
		keyFeatures: {
			"en-EN": [
				"Data extraction from websites",
				"Configurable URL redirects",
				"Automation of repetitive user tasks",
				"Cross-browser support (Chrome + Firefox)",
				"Manifest V2/V3 compatibility",
			],
			"pl-PL": [
				"Pobieranie informacji ze stron internetowych",
				"Konfigurowalne przekierowania URL",
				"Automatyzacja powtarzalnych czynności użytkownika",
				"Wsparcie wielu przeglądarek (Chrome + Firefox)",
				"Kompatybilność z Manifest V2/V3",
			],
		},
		technologies: [
			"HTML",
			"JavaScript",
			"Manifest V2/V3",
			"Chrome API",
			"Firefox API",
			"Browsers development panels",
		],
	},
	{
		title: "Statistics App",
		sidebarName: "statistics-app.md",
		description: {
			"en-EN":
				"Simple React JS app to fetch data with Axios and show it as multiple charts with React Apex Charts.",
			"pl-PL":
				"Prosta aplikacja React JS do pobierania danych przy pomocy Axios oraz wyświetlania ich w postaci różnych wykresów z użyciem React apex charts.",
		},
		longDescription: {
			"en-EN":
				"A focused data dashboard built with React that fetches data over Axios and renders it as multiple interactive charts with React Apex Charts. Designed around clean visualization of API-driven data with minimal setup and a Material UI layout.",
			"pl-PL":
				"Prosty panel danych zbudowany w React, pobierający dane przez Axios i wyświetlający je jako wiele interaktywnych wykresów z użyciem React Apex Charts. Zaprojektowany wokół czytelnej wizualizacji danych z API przy minimalnej konfiguracji i układzie opartym na Material UI.",
		},
		images: [
			"https://www.adobe.com/express/learn/blog/media_17c8ed72cda121b0f9dfc50d289cba4d71cf8c199.png?width=1200&format=pjpg&optimize=medium",
		],
		keyFeatures: {
			"en-EN": [
				"Fetch data via Axios",
				"Multiple interactive chart types",
				"Responsive Material UI layout",
			],
			"pl-PL": [
				"Pobieranie danych przez Axios",
				"Kilka typów interaktywnych wykresów",
				"Responsywny układ oparty na Material UI",
			],
		},
		technologies: [
			"React JS",
			"Typescript",
			"Material UI",
			"React Apex Charts",
		],
	},
];

export const settings = {
	defaultLang: "en-EN",
	fallbackLang: "en-EN",
};

export const locales = [
	{
		prefix: "pl-PL",
		name: "Polski",
	},
	{
		prefix: "en-EN",
		name: "English",
	},
];
