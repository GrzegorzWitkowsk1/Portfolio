import {
	Box,
	ButtonBase,
	styled,
	Typography,
	useTheme,
} from "@mui/material";
import { House, X } from "lucide-react";
import { useNavigationStore } from "store/navigation-store";

const TabBarRoot = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "stretch",
	height: "35px",
	overflowX: "auto",
	overflowY: "hidden",
	borderBottom: `1px solid ${
		theme.palette.mode === "dark"
			? theme.palette.grey[400]
			: theme.palette.grey[300]
	}`,
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
	"&::-webkit-scrollbar": {
		height: "2px",
	},
	"&::-webkit-scrollbar-thumb": {
		backgroundColor: theme.palette.grey[400],
	},
}));

const HomeTab = styled(ButtonBase)<{ active: boolean }>(({ theme, active }) => ({
	display: "flex",
	alignItems: "center",
	gap: "6px",
	padding: "0 14px",
	fontSize: "13px",
	color: active
		? theme.palette.text.primary
		: theme.palette.text.secondary,
	borderRight: `1px solid ${
		theme.palette.mode === "dark"
			? theme.palette.grey[400]
			: theme.palette.grey[300]
	}`,
	backgroundColor: active
		? theme.palette.mode === "dark"
			? theme.palette.background.default
			: "white"
		: "transparent",
	borderBottom: active ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent",
	whiteSpace: "nowrap",
}));

const FileTab = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
	display: "flex",
	alignItems: "center",
	gap: "6px",
	padding: "0 10px 0 14px",
	fontSize: "13px",
	color: active
		? theme.palette.text.primary
		: theme.palette.text.secondary,
	borderRight: `1px solid ${
		theme.palette.mode === "dark"
			? theme.palette.grey[400]
			: theme.palette.grey[300]
	}`,
	backgroundColor: active
		? theme.palette.mode === "dark"
			? theme.palette.background.default
			: "white"
		: "transparent",
	borderBottom: active ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent",
	whiteSpace: "nowrap",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: active
			? theme.palette.mode === "dark"
				? theme.palette.background.default
				: "white"
			: theme.palette.action.hover,
	},
	"& .close-btn": {
		opacity: 0,
		transition: "opacity 0.2s ease",
	},
	"&:hover .close-btn": {
		opacity: 1,
	},
}));

const CloseButton = styled(ButtonBase)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "18px",
	height: "18px",
	borderRadius: "4px",
	color: theme.palette.text.secondary,
	"&:hover": {
		backgroundColor: theme.palette.action.hover,
		color: theme.palette.text.primary,
	},
}));

export function TabBar() {
	const theme = useTheme();
	const tabs = useNavigationStore((s) => s.tabs);
	const activeTabId = useNavigationStore((s) => s.activeTabId);
	const closeTab = useNavigationStore((s) => s.closeTab);
	const setActiveTab = useNavigationStore((s) => s.setActiveTab);

	const isHomeActive = activeTabId === null;

	return (
		<TabBarRoot>
			<HomeTab
				active={isHomeActive}
				onClick={() => setActiveTab(null)}
			>
				<House size={14} color={isHomeActive ? theme.palette.text.primary : theme.palette.text.secondary} />
				<Typography sx={{ fontSize: "13px", color: "inherit" }}>
					home
				</Typography>
			</HomeTab>
			{tabs.map((tab) => (
				<FileTab
					key={tab.id}
					active={activeTabId === tab.id}
					onClick={() => setActiveTab(tab.id)}
				>
					{tab.icon}
					<Typography sx={{ fontSize: "13px", color: "inherit" }}>
						{tab.label}
					</Typography>
					<CloseButton
						className="close-btn"
						onClick={(e) => {
							e.stopPropagation();
							closeTab(tab.id);
						}}
					>
						<X size={12} />
					</CloseButton>
				</FileTab>
			))}
		</TabBarRoot>
	);
}
