import { ProjectType } from "../views/homepage/components/projects/types";
import { WorkExperienceEntryType } from "../views/homepage/components/work-experience/types";
import filbrukBackground from "assets/images/project-filbruk-background.png";

export const workExperience: WorkExperienceEntryType[] = [
  {
    companyName: "Motorro Sp. z.o.o",
    dateStart: "08.2021",
    dateEnd: "",
    isCurrent: true,
    wasInternship: false,
    specialization: "Frontend Developer",
    translations: {
      "pl-PL": {
        description:
          "Utrzymywanie i rozwijanie aplikacji React i rozszerzeń internetowych. Mentorowanie młodszych kolegów.",
        responsibilites: [
          "Utrzymywanie i rozwijanie całej aplikacji React JS stworzonej przeze mnie od podstaw.",
          "Stworzenie panelu administracyjnego do zarządzania treściami w aplikacji",
          "Mentoring nad młodszymi deweloperami",
          "Prowadzenie zespołu. Rozdzielanie zadań, prowadzenie spotkań i dbanie o płynność pracy.",
        ],
      },
      "en-EN": {
        description:
          "Maintaining and developing react App and web extensions. Mentored younger colleagues.",
        responsibilites: [
          "Maintaining and developing whole React JS app from scratch.",
          "Implemented admin panel",
          "Mentoring junior dev",
          "Lead team. Distribute tasks, lead meetings and take care of tasks flow.",
        ],
      },
    },
  },
  {
    companyName: "MCA - WARE MIRON BALCERZAK",
    dateStart: "09.2024",
    dateEnd: "",
    isCurrent: true,
    wasInternship: false,
    specialization: "Frontend Developer",
    translations: {
      "pl-PL": {
        description: "Utrzymywanie i rozwijanie aplikacji React JS.",
        responsibilites: [
          "Utrzymywanie i rozwijanie całej aplikacji React JS stworzonej przeze mnie od podstaw.",
        ],
      },
      "en-EN": {
        description: "Maintaining and developing react App.",
        responsibilites: [
          "Maintaining and developing React JS app from scratch.",
        ],
      },
    },
  },
  {
    companyName: "memogadget.com",
    dateStart: "2015",
    dateEnd: "",
    isCurrent: false,
    wasInternship: true,
    specialization: "Erasmus internship",
    translations: {
      "pl-PL": {
        description:
          "Staż w ramach programu Erasmus w firmie z branży e-commerce.",
        responsibilites: [
          "Tworzenie polskich tłumaczeń na głównej stronie firmy",
          "Uczestnictwo w dyskusjach o funkcjach i poprawkach w aplikacji",
          "Nauka o e-commerce, performence aplikacji i pozycjonowaniu w przeglądrkach",
          "Próby znalezienia zastosowania dla VR w platformach e-commerce",
        ],
      },
      "en-EN": {
        description: "Erasmus intership in e-commerce company.",
        responsibilites: [
          "Making polish translations on main website of company",
          "Participating in discussions about features and fixes",
          "Learning about e-commerce, accelerating apps and google positioning",
          "Trying to find a use for VR in e-commerce platforms",
        ],
      },
    },
  },
  {
    companyName: "Liquid Systems Sp. z.o.o",
    dateStart: "",
    dateEnd: "",
    isCurrent: false,
    wasInternship: true,
    specialization: "Service technician",
    translations: {
      "pl-PL": {
        description:
          "Świadczenie usług związanych z instalacją internetu światłowodowego i telewizji.",
        responsibilites: [
          "Instalacje sprzętu do świadczenia usług internetu światłowodowego dla klientów",
          "Biuro obsługi klienta",
          "Praca z klientami, rozwiązywanie problemów i udzielanie informacji o usłudze.",
        ],
      },
      "en-EN": {
        description: "Providing optical fiber internet and tv services.",
        responsibilites: [
          "Installations of hardware to get optical fiber internet for customers",
          "Helpdesk",
          "Working with customers, problem solving and providing informations about service.",
        ],
      },
    },
  },
];

export const projects: ProjectType[] = [
  {
    title: "Motorro",
    description: {
      "en-EN":
        "An app for the automotive industry. Comparing and ordering parts from automotive wholesalers.",
      "pl-PL":
        "Aplikacja dla branży motoryzacyjnej. Porównywanie i zamawianie części od hurtowni motoryzacyjnych.",
    },
    image:
      "https://cdn.pracahandlowiec.pl/uploads/image/motorro-logo-e32036fd-e336-46fa-8851-d2534e845247.png",
    technologies: ["React JS", "Typescript", "Material UI", "React Query"],
  },
  {
    title: "Rezerwik",
    description: {
      "en-EN":
        "An app for restaurant and services. Both sides (customer and owner) app for managing reservations and orders.",
      "pl-PL":
        "Aplikacja dla restauracji i usług. Aplikacja dla obu stron (klienta i właściciela) do zarządzania rezerwacjami i zamówieniami.",
    },
    image:
      "https://lodz.travel/files/public/_processed_/a/b/csm_Restauracja_Farina_Bianco_Restaurant_Lodz_Lodz_polska_poland_convention_bureau_mice__2__341ef4e7cb.jpg",
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
    title: "Chrome and firefox extensions",
    description: {
      "en-EN":
        "Few different extensions in pure javascript. Extensions was created to get informations from website, make different redirects or automative activities casually performed by user.",
      "pl-PL":
        "Kilka różnych rozszerzeń w czystym javascript. Rozszerzenia zostały stworzone do pobierania informacji ze stron, wykonywania różnych przekierowań lub automatyzacji czynności wykonywanych przez użytkownika.",
    },
    image:
      "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg0jbggprefkbd0bzrcwy.png",
    technologies: ["HTML", "JavaScript"],
  },
  {
    title: "Statistics App",
    codeUrl: "https://github.com/GrzegorzWitkowsk1/LUXO-statistics-app",
    description: {
      "en-EN":
        "Simple React JS app to fetch data with Axios and show it as multiple charts with React Apex Charts.",
      "pl-PL":
        "Prosta aplikacja React JS do pobierania danych przy pomocy Axios oraz wyświetlania ich w postaci różnych wykresów z użyciem React apex charts.",
    },
    image:
      "https://www.adobe.com/express/learn/blog/media_17c8ed72cda121b0f9dfc50d289cba4d71cf8c199.png?width=1200&format=pjpg&optimize=medium",
    technologies: [
      "React JS",
      "Typescript",
      "Material UI",
      "React Apex Charts",
    ],
  },
  {
    title: "Filbruk - Business app",
    description: {
      "en-EN":
        "A business portfolio application. Showcasing company information, services and contact details.",
      "pl-PL":
        "Aplikacja portfolio dla firmy. Prezentacja informacji o firmie, usług i danych kontaktowych.",
    },
    image: filbrukBackground,
    technologies: [
      "React JS",
      "Vite",
      "TailWind CSS",
      "Lovable",
      "Cloudflare Pages",
    ],
    demoUrl: "https://filbruk.pl/",
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
