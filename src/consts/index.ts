import { ProjectType } from "../views/homepage/components/projects/types";
import { WorkExperienceEntryType } from "../views/homepage/components/work-experience/types";

export const workExperience: WorkExperienceEntryType[] = [
  {
    companyName: "Motorro Sp. z.o.o",
    dateStart: "08.2021",
    dateEnd: "Present",
    specialization: "Frontend Developer",
    description:
      "Maintaining and developing react App and web extensions. Mentored younger colleagues.",
    responsibilites: [
      "Maintaining and developing whole React JS app from scratch.",
      "Implemented admin panel",
      "Mentoring junior dev",
      "Lead team. Distribute tasks, lead meetings and take care of tasks flow.",
    ],
  },
  {
    companyName: "MCA - WARE MIRON BALCERZAK",
    dateStart: "09.2024",
    dateEnd: "Present",
    specialization: "Frontend Developer",
    description: "Maintaining and developing react App.",
    responsibilites: ["Maintaining and developing React JS app from scratch."],
  },
  {
    companyName: "memogadget.com",
    dateStart: "2015",
    dateEnd: "Present",
    specialization: "Erasmus internship",
    description: "Erasmus intership in e-commerce company.",
    responsibilites: [
      "Making polish translations on main website of company",
      "Participating in discussions about features and fixes",
      "Learning about e-commerce, accelerating apps and google positioning",
      "Trying to find a use for VR in e-commerce platforms",
    ],
  },
  {
    companyName: "Liquid Systems Sp. z.o.o",
    dateStart: "Few interships in middle school",
    dateEnd: "",
    specialization: "Service technician",
    description: "Providing optical fiber internet and tv services.",
    responsibilites: [
      "Installations of hardware to get optical fiber internet for customers",
      "Helpdesk",
      "Working with customers, problem solving and providing informations about service.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    title: "Motorro",
    description:
      "An app for the automotive industry. Comparing and ordering parts from automotive wholesalers.",
    image:
      "https://cdn.pracahandlowiec.pl/uploads/image/motorro-logo-e32036fd-e336-46fa-8851-d2534e845247.png",
    technologies: ["React JS", "Typescript", "Material UI", "React Query"],
  },
  {
    title: "Rezerwik",
    description:
      "An app for restaurant and services. Both sides (customer and owner) app for managing reservations and orders.",
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
    description:
      "Few different extensions in pure javascript. Extensions was created to get informations from website, make different redirects or automative activities casually performed by user.",
    image:
      "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg0jbggprefkbd0bzrcwy.png",
    technologies: ["HTML", "JavaScript"],
  },
  {
    title: "Statistics App",
    description:
      "Simple React JS app to fetch data and show it as multiple charts.",
    image:
      "https://www.adobe.com/express/learn/blog/media_17c8ed72cda121b0f9dfc50d289cba4d71cf8c199.png?width=1200&format=pjpg&optimize=medium",
    technologies: [
      "React JS",
      "Typescript",
      "Material UI",
      "React Apex Charts",
    ],
  },
];
