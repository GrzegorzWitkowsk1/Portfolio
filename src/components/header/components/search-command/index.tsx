import {
	alpha,
	Box,
	ButtonBase,
	IconButton,
	InputAdornment,
	InputBase,
	Modal,
	styled,
	Theme,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Folder, Search } from "lucide-react";
import {
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useTranslation } from "react-i18next";
import { getFileIcon } from "config/file-icon";
import { projects, workExperience } from "consts";
import { FolderName, useNavigationStore } from "store/navigation-store";
import { ResultRow } from "./components/result-row";

type SearchEntry = {
	id: string;
	name: string;
	icon: ReactNode;
	path: string;
	dateStart?: string;
	dateEnd?: string;
	role?: string;
	terms: string[];
	onClick: () => void;
};

type SearchRow = {
	id: string;
	icon: ReactNode;
	name: string;
	secondary: string;
	onClick: () => void;
};

type BuildEntriesArgs = {
	theme: Theme;
	t: (key: string) => string;
	openFile: (tab: { id: string; label: string; icon: ReactNode }) => void;
	setOpenFolder: (folder: FolderName) => void;
	setActiveTab: (id: string | null) => void;
	handleClose: () => void;
};

const SearchTrigger = styled(ButtonBase)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "6px",
	height: "24px",
	minWidth: "180px",
	padding: "0 8px",
	borderRadius: "6px",
	justifyContent: "flex-start",
	color: theme.palette.text.secondary,
	userSelect: "none",
	border: `1px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[300]
			: theme.palette.grey[400]
	}`,
	transition: "border-color 0.2s ease",
	"&:hover": {
		borderColor: theme.palette.primary.main,
	},
	"&:focus-visible": {
		outline: `2px solid ${theme.palette.primary.main}`,
		outlineOffset: "1px",
	},
}));

const MobileSearchButton = styled(IconButton)(({ theme }) => ({
	height: "28px",
	width: "28px",
	color: theme.palette.text.secondary,
	border: `1px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[300]
			: theme.palette.grey[400]
	}`,
	"&:focus-visible": {
		outline: `2px solid ${theme.palette.primary.main}`,
		outlineOffset: "-1px",
	},
}));

const SearchModalRoot = styled(Box)(({ theme }) => ({
	position: "absolute",
	top: "18%",
	left: "50%",
	transform: "translateX(-50%)",
	width: "calc(100% - 32px)",
	maxWidth: "680px",
	maxHeight: "70vh",
	display: "flex",
	flexDirection: "column",
	borderRadius: "10px",
	outline: "none",
	border: `1px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[300]
			: theme.palette.grey[500]
	}`,
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
	boxShadow: theme.shadows[8],
}));

function filterEntries(entries: SearchEntry[], query: string): SearchEntry[] {
	const q = query.trim().toLowerCase();
	if (!q) {
		return entries;
	}
	return entries.filter((entry) =>
		entry.terms.some((term) => term.toLowerCase().includes(q)),
	);
}

function buildSecondary({
	path,
	dateStart,
	dateEnd,
	role,
}: SearchEntry): string {
	const parts: string[] = [path];
	if (dateStart || dateEnd) {
		parts.push(
			dateStart && dateEnd
				? `${dateStart} - ${dateEnd}`
				: dateStart || dateEnd || "",
		);
	}
	if (role) {
		parts.push(role);
	}
	return parts.join(" ⋅ ");
}

function buildEntries({
	theme,
	t,
	openFile,
	setOpenFolder,
	setActiveTab,
	handleClose,
}: BuildEntriesArgs): SearchEntry[] {
	const makeFile = (
		label: string,
		folder: FolderName | undefined,
		extra: Partial<SearchEntry>,
	): SearchEntry => {
		const { id, icon } = getFileIcon(label, folder, theme);
		const path = folder ? `${folder}/${label}` : label;
		return {
			id,
			name: label,
			icon,
			path,
			terms: [label, path],
			onClick: () => {
				openFile({ id, label, icon });
				handleClose();
			},
			...extra,
		};
	};

	const folders: SearchEntry[] = [
		{
			id: "projects",
			name: t("common::projects"),
			icon: <Folder size={16} color={theme.palette.primary.main} />,
			path: "projects",
			terms: ["projects", t("common::projects")],
			onClick: () => {
				setOpenFolder("projects");
				setActiveTab(null);
				handleClose();
			},
		},
		{
			id: "work-experience",
			name: t("common::workExperience"),
			icon: <Folder size={16} color={theme.palette.primary.main} />,
			path: "work-experience",
			terms: ["work-experience", t("common::workExperience")],
			onClick: () => {
				setOpenFolder("work-experience");
				setActiveTab(null);
				handleClose();
			},
		},
	];

	const rootFiles = ["about-me.tsx", "new-message.tsx"].map((label) =>
		makeFile(label, undefined, {}),
	);

	const projectEntries = projects.map((project) =>
		makeFile(project.sidebarName, "projects", {
			dateStart: project.startDate,
			terms: [
				project.sidebarName,
				`projects/${project.sidebarName}`,
				project.title,
				...project.technologies,
			],
		}),
	);

	const workEntries = workExperience.map((entry) => {
		const dateStart = entry.dateStart.trim() ? entry.dateStart : undefined;
		const dateEnd = entry.dateEnd.trim() ? entry.dateEnd : undefined;
		return makeFile(entry.sidebarName, "work-experience", {
			dateStart,
			dateEnd,
			role: entry.position,
			terms: [
				entry.sidebarName,
				`work-experience/${entry.sidebarName}`,
				entry.companyName,
				entry.position,
				...entry.stack,
			],
		});
	});

	return [...folders, ...rootFiles, ...projectEntries, ...workEntries];
}

export function SearchCommand() {
	const theme = useTheme();
	const { t } = useTranslation();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const openFile = useNavigationStore((s) => s.openFile);
	const setOpenFolder = useNavigationStore((s) => s.setOpenFolder);
	const setActiveTab = useNavigationStore((s) => s.setActiveTab);

	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClose = useCallback(() => {
		setOpen(false);
		setQuery("");
	}, []);

	const entries = useMemo(
		() =>
			buildEntries({
				theme,
				t,
				openFile,
				setOpenFolder,
				setActiveTab,
				handleClose,
			}),
		[theme, t, openFile, setOpenFolder, setActiveTab, handleClose],
	);

	const results = useMemo<SearchRow[]>(
		() =>
			filterEntries(entries, query).map((entry) => ({
				id: entry.id,
				icon: entry.icon,
				name: entry.name,
				secondary: buildSecondary(entry),
				onClick: entry.onClick,
			})),
		[entries, query],
	);

	useEffect(() => {
		if (open) {
			inputRef.current?.focus();
		}
	}, [open]);

	const trigger = isMobile ? (
		<MobileSearchButton
			onClick={() => setOpen(true)}
			aria-label={t("search::open")}
		>
			<Search size={16} />
		</MobileSearchButton>
	) : (
		<SearchTrigger onClick={() => setOpen(true)} aria-label={t("search::open")}>
			<Search size={14} color={theme.palette.text.secondary} />
			<Typography
				sx={{ fontSize: "13px", color: theme.palette.text.secondary }}
			>
				{t("search::triggerPlaceholder")}
			</Typography>
		</SearchTrigger>
	);

	return (
		<>
			{trigger}
			<Modal
				open={open}
				onClose={handleClose}
				slotProps={{
					backdrop: {
						sx: {
							backgroundColor:
								theme.palette.mode === "light"
									? alpha(theme.palette.grey[900], 0.3)
									: "rgba(0, 0, 0, 0.6)",
							backdropFilter: "blur(8px)",
						},
					},
				}}
			>
				<SearchModalRoot>
					<Box
						sx={{
							flexShrink: 0,
							padding: "12px",
							borderBottom: `1px solid ${
								theme.palette.mode === "light"
									? theme.palette.grey[200]
									: theme.palette.grey[500]
							}`,
						}}
					>
						<InputBase
							inputRef={inputRef}
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder={t("search::modalPlaceholder")}
							fullWidth
							startAdornment={
								<InputAdornment position="start">
									<Search size={18} color={theme.palette.text.secondary} />
								</InputAdornment>
							}
							endAdornment={
								<InputAdornment position="end">
									<Box
										component="span"
										sx={{
											fontSize: "11px",
											padding: "1px 6px",
											borderRadius: "4px",
											border: `1px solid ${
												theme.palette.mode === "light"
													? theme.palette.grey[300]
													: theme.palette.grey[500]
											}`,
											color: theme.palette.text.secondary,
										}}
									>
										{t("search::esc")}
									</Box>
								</InputAdornment>
							}
							inputProps={{
								style: {
									fontSize: "15px",
									color: theme.palette.text.primary,
								},
							}}
						/>
					</Box>
					<Box
						sx={{
							flex: 1,
							minHeight: 0,
							overflowY: "auto",
							padding: "8px",
							display: "flex",
							flexDirection: "column",
							gap: "2px",
						}}
					>
						{results.length === 0 ? (
							<Typography
								sx={{
									padding: "16px",
									fontSize: "13px",
									textAlign: "center",
									color: theme.palette.text.secondary,
								}}
							>
								{t("search::noResults")}
							</Typography>
						) : (
							results.map((row) => (
								<ResultRow
									key={row.id}
									icon={row.icon}
									name={row.name}
									secondary={row.secondary}
									onClick={row.onClick}
								/>
							))
						)}
					</Box>
				</SearchModalRoot>
			</Modal>
		</>
	);
}
