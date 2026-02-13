import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

import WorkExperience from "./components/work-experience";
import MainSection from "./components/main-section";
import Projects from "./components/projects";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import { useEffect, useRef } from "react";
import Footer from "./components/footer";

import LanguagePopover from "components/language-popover";
import en from "locales/en-EN.json";
import pl from "locales/pl-PL.json";

export default function Homepage() {
	const aboutMeRef = useRef<HTMLElement | null>(null);
	const myWorkRef = useRef<HTMLElement | null>(null);
	const contactRef = useRef<HTMLElement | null>(null);

	const { i18n } = useTranslation();
	i18n.addResourceBundle("en-EN", "translation", en);
	i18n.addResourceBundle("pl-PL", "translation", pl);

	console.log(i18n.language);
	function scrollToAbout() {
		aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
	}

	function scrollToMyWork() {
		myWorkRef.current?.scrollIntoView({ behavior: "smooth" });
	}

	function scrollToContact() {
		contactRef.current?.scrollIntoView({ behavior: "smooth" });
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

	useEffect(() => {
		const metaThemeColor = document.querySelector("meta[name=theme-color]");
		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", "#1C1628");
		}
	}, []);

	return (
		<>
			<Box
				sx={{
					backgroundColor: "black",
					display: "flex",
					flexDirection: "column",
					overflow: "auto",
				}}
			>
				<MainSection
					aboutScrollHandler={scrollToAbout}
					contactScrollHandler={scrollToContact}
					myWorkScrollHandler={scrollToMyWork}
				/>
				<AboutMe ref={aboutMeRef} />
				<Projects containerRef={myWorkRef} />
				<WorkExperience />
				<Contact ref={contactRef} />
				<Footer />
			</Box>
			<LanguagePopover />
		</>
	);
}
