import {
	alpha,
	Box,
	ButtonBase,
	styled,
	Theme,
	Typography,
	useTheme,
} from "@mui/material";
import {
	CornerLeftUpIcon,
	Briefcase,
	FileBraces,
	Folder,
	Mail,
	User,
} from "lucide-react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { projects, workExperience } from "consts";
import { homeContent, HomeFileEntry } from "config/home-content";
import { getFileIcon } from "config/file-icon";
import { FolderName, useNavigationStore } from "store/navigation-store";
import { ItemCard } from "./components/item-card";

type HomeItem = {
	id: string;
	name: string;
	icon: ReactNode;
	secondary?: string;
	technologies?: string[];
	onClick: () => void;
};

type BuildItemsArgs = {
	openFolder: FolderName | null;
	theme: Theme;
	t: TFunction;
	onOpenFile: (label: string, folder: FolderName | undefined) => void;
	onOpenFolder: (folder: FolderName) => void;
};

function getSecondaryText({
	t,
	id,
	entry,
}: {
	t: TFunction;
	id: string;
	entry?: HomeFileEntry;
}): string {
	const description = t(`homeFiles::${id}`);
	const start = entry?.dateStart?.trim();
	if (start) {
		return `${start} · ${description}`;
	}
	return description;
}

function buildHomeItems({
	openFolder,
	theme,
	t,
	onOpenFile,
	onOpenFolder,
}: BuildItemsArgs): HomeItem[] {
	if (openFolder === "projects") {
		return projects.map((project) => {
			const id = `projects/${project.sidebarName}`;
			return {
				id,
				name: project.sidebarName,
				icon: <FileBraces size={20} color={theme.palette.warning.main} />,
				secondary: getSecondaryText({
					t,
					id,
					entry: homeContent[id],
				}),
				technologies: project.technologies,
				onClick: () => onOpenFile(project.sidebarName, "projects"),
			};
		});
	}

	if (openFolder === "work-experience") {
		return workExperience.map((workEntry) => {
			const id = `work-experience/${workEntry.sidebarName}`;
			return {
				id,
				name: workEntry.sidebarName,
				icon: <Briefcase size={20} color="#a87eeb" />,
				secondary: getSecondaryText({
					t,
					id,
					entry: homeContent[id],
				}),
				onClick: () => onOpenFile(workEntry.sidebarName, "work-experience"),
			};
		});
	}

	const aboutMeItem: HomeItem = {
		id: "about-me.tsx",
		name: "about-me.tsx",
		icon: <User size={20} color={theme.palette.success.main} />,
		secondary: getSecondaryText({ t, id: "about-me.tsx" }),
		onClick: () => onOpenFile("about-me.tsx", undefined),
	};

	const folderItems: HomeItem[] = [
		{
			id: "work-experience",
			name: t("common::workExperience"),
			icon: <Folder size={20} color={theme.palette.primary.main} />,
			secondary: t("home::itemsCount", { count: workExperience.length }),
			onClick: () => onOpenFolder("work-experience"),
		},
		{
			id: "projects",
			name: t("common::projects"),
			icon: <Folder size={20} color={theme.palette.primary.main} />,
			secondary: t("home::itemsCount", { count: projects.length }),
			onClick: () => onOpenFolder("projects"),
		},
	];

	const newMessageItem: HomeItem = {
		id: "new-message.tsx",
		name: "new-message.tsx",
		icon: <Mail size={20} color={theme.palette.error.main} />,
		secondary: getSecondaryText({ t, id: "new-message.tsx" }),
		onClick: () => onOpenFile("new-message.tsx", undefined),
	};

	return [aboutMeItem, ...folderItems, newMessageItem];
}

const BackButton = styled(ButtonBase)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "6px",
	padding: "6px 14px",
	borderRadius: "6px",
	border: `1px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[300]
			: theme.palette.grey[400]
	}`,
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
	color:
		theme.palette.mode === "light"
			? theme.palette.grey[400]
			: theme.palette.grey[300],
	fontSize: "13px",
	transition: "border-color 0.2s ease, background-color 0.2s ease",
	"&:hover": {
		borderColor: theme.palette.primary.main,
		backgroundColor:
			theme.palette.mode === "light"
				? theme.palette.grey[100]
				: alpha(theme.palette.primary.main, 0.1),
	},
}));

export function HomeView() {
	const theme = useTheme();
	const { t } = useTranslation();
	const openFolder = useNavigationStore((s) => s.openFolder);
	const closeFolder = useNavigationStore((s) => s.closeFolder);
	const openFile = useNavigationStore((s) => s.openFile);
	const setOpenFolder = useNavigationStore((s) => s.setOpenFolder);

	const handleOpenFile = (label: string, folder: FolderName | undefined) => {
		const { id, icon } = getFileIcon(label, folder, theme);
		openFile({ id, label, icon });
	};

	const items = buildHomeItems({
		openFolder,
		theme,
		t,
		onOpenFile: handleOpenFile,
		onOpenFolder: setOpenFolder,
	});

	const pathLabel = openFolder ? `~/${openFolder}` : `~/portfolio`;

	return (
		<Box
			sx={{
				width: "100%",
				maxWidth: { xs: "100%", md: "75%" },
				marginLeft: "auto",
				marginRight: "auto",
				display: "flex",
				flexDirection: "column",
				padding: "0 24px 32px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography
					sx={{ fontSize: "22px", fontWeight: 600, color: "text.primary" }}
				>
					{pathLabel}
				</Typography>
				{openFolder && (
					<BackButton onClick={closeFolder}>
						<CornerLeftUpIcon size={16} />
						<Typography sx={{ fontSize: "13px", color: "inherit" }}>
							{t("common::portfolio")}
						</Typography>
					</BackButton>
				)}
			</Box>
			<Typography
				sx={{
					fontSize: "13px",
					mb: "16px",
					color:
						theme.palette.mode === "dark"
							? theme.palette.grey[100]
							: theme.palette.grey[600],
				}}
			>
				{t("home::itemsClickToOpen", { count: items.length })}
			</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
					gap: "16px",
				}}
			>
				{items.map((item) => (
					<ItemCard
						key={item.id}
						icon={item.icon}
						name={item.name}
						secondary={item.secondary}
						technologies={item.technologies}
						onClick={item.onClick}
					/>
				))}
			</Box>
		</Box>
	);
}
