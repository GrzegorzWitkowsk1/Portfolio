import { Box, styled } from "@mui/material";
import { useNavigationStore } from "store/navigation-store";
import { BreadcrumbsBar } from "./components/breadcrumbs-bar";
import { TabBar } from "./components/tab-bar";
import { FileView } from "./components/file-view";

const MainRoot = styled(Box)(({ theme }) => ({
	flex: 1,
	minWidth: 0,
	display: "flex",
	flexDirection: "column",
	minHeight: 0,
	backgroundColor: theme.palette.background.default,
	backgroundImage: `radial-gradient(circle, ${
		theme.palette.mode === "dark"
			? theme.palette.grey[400]
			: theme.palette.grey[300]
	} 1px, transparent 1px)`,
	backgroundSize: "24px 24px, 100% 100%",
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
		<MainRoot>
			<TabBar />
			{activeTabId === null && <BreadcrumbsBar />}
			<ContentArea>
				{activeTab && (
					<FileView icon={activeTab.icon} label={activeTab.label} />
				)}
			</ContentArea>
		</MainRoot>
	);
}
