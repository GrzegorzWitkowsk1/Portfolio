import { Box, styled } from "@mui/material";
import { useNavigationStore } from "store/navigation-store";
import { projects, workExperience } from "consts";
import { Terminal } from "components/terminal";
import { BreadcrumbsBar } from "./components/breadcrumbs-bar";
import { TabBar } from "./components/tab-bar";
import { FileView } from "./components/file-view";
import { HomeView } from "./components/home-view";
import { AboutMe } from "./components/about-me";
import { NewMessage } from "./components/new-message";
import { ProjectView } from "./components/project-view";
import { WorkExperienceView } from "./components/work-experience-view";

const MainRoot = styled(Box, {
	shouldForwardProp: (prop) => prop !== "withDots",
})<{ withDots?: boolean }>(({ theme, withDots }) => ({
	flex: 1,
	minWidth: 0,
	display: "flex",
	flexDirection: "column",
	minHeight: 0,
	position: "relative",
	backgroundColor: theme.palette.background.default,
	...((withDots ?? false) && {
		backgroundImage: `radial-gradient(circle, ${
			theme.palette.mode === "dark"
				? theme.palette.grey[400]
				: theme.palette.grey[300]
		} 1px, transparent 1px)`,
		backgroundSize: "24px 24px, 100% 100%",
	}),
}));

const ContentArea = styled(Box)({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	paddingTop: "24px",
	overflow: "auto",
});

export function Main() {
	const activeTabId = useNavigationStore((s) => s.activeTabId);
	const tabs = useNavigationStore((s) => s.tabs);

	const activeTab = tabs.find((t) => t.id === activeTabId);

	const project = activeTab
		? projects.find((p) => activeTab.id === `projects/${p.sidebarName}`)
		: undefined;

	const workEntry = activeTab
		? workExperience.find(
				(w) => activeTab.id === `work-experience/${w.sidebarName}`,
			)
		: undefined;

	return (
		<MainRoot withDots={activeTabId === null}>
			<TabBar />
			{activeTabId === null && <BreadcrumbsBar />}
			<ContentArea>
				{activeTabId === null ? (
					<HomeView />
				) : (
					activeTab &&
					(activeTab.label === "about-me.tsx" ? (
						<AboutMe />
					) : activeTab.label === "new-message.tsx" ? (
						<NewMessage />
					) : project ? (
						<ProjectView project={project} />
					) : workEntry ? (
						<WorkExperienceView entry={workEntry} />
					) : (
						<FileView icon={activeTab.icon} label={activeTab.label} />
					))
				)}
			</ContentArea>
			<Terminal />
		</MainRoot>
	);
}
