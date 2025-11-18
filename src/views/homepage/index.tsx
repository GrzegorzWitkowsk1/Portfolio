import Box from "@mui/material/Box";
import MainSection from "./components/main-section";
import AboutMe from "./components/about-me";
import { useEffect, useRef } from "react";
import Projects from "./components/projects";
import WorkExperience from "./components/work-experience";
import Contact from "./components/contact";

export default function Homepage() {
  const aboutMeRef = useRef<HTMLElement | null>(null);

  function scrollToAbout() {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const defaultTitle = "Hire me! ✍️";
    const hiddenTitle = "Come back! 👋";

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = hiddenTitle;
      } else {
        document.title = defaultTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    document.title = defaultTitle;

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <MainSection scrollHandler={scrollToAbout} />
      <AboutMe ref={aboutMeRef} />
      <Projects />
      <WorkExperience />
      <Contact />
    </Box>
  );
}
