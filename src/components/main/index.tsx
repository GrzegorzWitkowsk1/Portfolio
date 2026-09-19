import { Box, styled } from "@mui/material";
import { useNavigationStore } from "store/navigation-store";
import { BreadcrumbsBar } from "./components/breadcrumbs-bar";
import { TabBar } from "./components/tab-bar";
import { FileView } from "./components/file-view";
import { HomeView } from "./components/home-view";
import { AboutMe } from "./components/about-me";

const MainRoot = styled(Box, {
	shouldForwardProp: (prop) => prop !== "withDots",
})<{ withDots?: boolean }>(({ theme, withDots }) => ({
	flex: 1,
	minWidth: 0,
	display: "flex",
	flexDirection: "column",
	minHeight: 0,
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
					) : (
						<FileView icon={activeTab.icon} label={activeTab.label} />
					))
				)}
			</ContentArea>
		</MainRoot>
	);
}
