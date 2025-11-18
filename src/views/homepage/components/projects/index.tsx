import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { ProjectType } from "./types";
import ProjectContainer from "./components/project-container";

const projects: ProjectType[] = [
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

export default function Projects() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { lg: "32px", md: "24px", xs: "12px" },
        justifyContent: "center",
        alignItems: "center",
        px: { lg: 0, md: 0, xs: "16px" },
        backgroundColor: "#0F0F12",
        py: { lg: "60px", md: "60px", xs: "30px" },
      }}
    >
      <Typography textAlign={"center"} variant="h3" color="white">
        Featured{" "}
        <span style={{ color: theme.palette.primary.main }}>Projects</span>
      </Typography>
      <Typography textAlign={"center"} variant="h6" color="grayText">
        A selection of projects that showcase my skills and experience
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { lg: "row", md: "row", xs: "column" },
          gap: "16px",
          width: { xl: "70%", lg: "70%", md: "95%", xs: "95%" },
        }}
      >
        {projects.map((p) => (
          <ProjectContainer project={p} />
        ))}
      </Box>
    </Box>
  );
}
