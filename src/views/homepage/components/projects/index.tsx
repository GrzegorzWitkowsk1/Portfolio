import { RefObject } from "react";
import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import ProjectContainer from "./components/project-container";
import { projects } from "../../../../consts";

interface Props {
  ref: RefObject<HTMLElement | null>;
}

export default function Projects({ ref }: Props) {
  const theme = useTheme();

  return (
    <Box
      ref={ref}
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
      <Typography
        textAlign={"center"}
        variant="h6"
        color={theme.palette.grey[600]}
      >
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
