import {
	Box,
	ButtonBase,
	Collapse,
	styled,
	Typography,
	useTheme,
} from "@mui/material";
import {
	FiberManualRecord,
	FormatQuote,
	Terminal,
} from "@mui/icons-material";
import { ReactNode, useState } from "react";
import { BranchInfo } from "./components/branch-info";
import { ExplorerHeader } from "./components/explorer-header";
import { projects, workExperience } from "consts";
import { ArrowDown, ArrowRight, Briefcase, FileBraces, Folder, FolderOpen, Mail, User } from "lucide-react";

const SidebarRoot = styled(Box)(({ theme }) => ({
	width: "280px",
	flexShrink: 0,
	flexDirection: "column",
	display: "flex",
	borderRight: `1px solid ${
		theme.palette.mode === "dark" ? theme.palette.grey[400] : theme.palette.grey[300]
	}`,
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
}));

const ExplorerBody = styled(Box)(({ theme }) => ({
	flex: 1,
	overflowY: "auto",
	overflowX: "hidden",
	padding: "8px 6px 16px",
	borderBottom:
		theme.palette.mode === "dark"
			? `1px solid ${theme.palette.grey[400]}`
			: `1px solid ${theme.palette.grey[300]}`,
}));

const SidebarFooterRoot = styled(Box)(({ theme }) => ({
	flexShrink: 0,
	display:'flex', flexDirection:'column', gap:'8px',
	padding: "6px 10px",
	color: theme.palette.text.secondary,
}));

const RowBase = styled(ButtonBase)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "6px",
	width: "100%",
	minHeight: "26px",
	padding: "0 8px",
	justifyContent: "flex-start",
	borderRadius: "4px",
	textTransform: "none",
	color: theme.palette.text.secondary,
	"&:hover": {
		backgroundColor: theme.palette.action.hover,
	},
}));

type NavItemProps = {
	icon: ReactNode;
	label: string;
	onClick?: () => void;
};

function NavItem({ icon, label, onClick }: NavItemProps) {
	return (
		<RowBase sx={{pl:'30px'}} onClick={onClick}>
			{icon}
			<Typography
				sx={{
					fontSize: "13px",
					whiteSpace: "nowrap",
					overflow: "hidden",
					textOverflow: "ellipsis",
					color: "inherit",
				}}
			>
				{label}
			</Typography>
		</RowBase>
	);
}

type FolderItemProps = {
	label: string;
	itemIcon: (index: number) => ReactNode;
	sublabels: string[];
	onOpenFolder?: () => void;
	onOpenFile?: (label: string) => void;
};

function FolderItem({
	label,
	itemIcon,
	sublabels,
	onOpenFolder,
	onOpenFile,
}: FolderItemProps) {
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	return (
		<Box>
			<RowBase onClick={() => setOpen((prev) => !prev)}>
				{open ? (
					<ArrowDown size={16} color={theme.palette.text.secondary} />
				) : (
					<ArrowRight size={16} color={theme.palette.text.secondary} />
				)}
				{open ? (
					<FolderOpen size={16} color={theme.palette.primary.main} />
				) : (
					<Folder size={16} color={theme.palette.primary.main} />
				)}
				<Typography
					sx={{
						fontSize: "13px",
						fontWeight: 600,
						textTransform: "uppercase",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
						color: "inherit",
					}}
				>
					{label}
				</Typography>
			</RowBase>
			<Collapse in={open} unmountOnExit>
				{sublabels.map((sublabel, index) => (
					<RowBase
						key={sublabel}
						sx={{ paddingLeft: "50px" }}
						onClick={() => onOpenFile?.(sublabel)}
					>
						{itemIcon(index)}
						<Typography
							sx={{
								fontSize: "13px",
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis",
								color: "inherit",
							}}
						>
							{sublabel}
						</Typography>
					</RowBase>
				))}
			</Collapse>
		</Box>
	);
}

export function Sidebar() {
	const theme = useTheme();

	return (
		<SidebarRoot>
			<ExplorerHeader />
			<BranchInfo />
			<ExplorerBody>
				<NavItem
					label={"about-me.tsx"}
					icon={<User size={16} color={theme.palette.success.main} />}
				/>
				<FolderItem
					label={"projects"}
					sublabels={projects.map((project) => project.title)}
					itemIcon={() => (
						<FileBraces size={16} color={theme.palette.warning.main} />
					)}
				/>
				<FolderItem
					label={"work-experience"}
					sublabels={workExperience.map((entry) => entry.companyName)}
					itemIcon={() => <Briefcase size={16} color="#a87eeb" />}
				/>
				<NavItem
					label={"new-message.tsx"}
					icon={<Mail size={16} color={theme.palette.error.main} />}
				/>
			</ExplorerBody>
			<SidebarFooterRoot>
				<RowBase>
					<Terminal sx={{ fontSize: "16px", color: "text.secondary" }} />
					<Typography
						sx={{
							fontSize: "14px",
							color: "inherit",
						}}
					>
						open terminal
					</Typography>
					<Box sx={{ flex: 1 }} />
					<Box
						sx={{
							borderRadius: "8px",
							border: `1px solid ${theme.palette.mode === "dark" ? theme.palette.grey[400] : theme.palette.grey[300]}`,
							padding: "2px",
						}}
					>
						<FormatQuote sx={{ fontSize: "14px", color: "text.secondary" }} />
					</Box>
				</RowBase>
				<RowBase sx={{padding:0}}>
					<Box
						sx={{
							borderRadius: "4px",
							color: "text.primary",
							width: "100%",
							background:
								theme.palette.mode === "dark"
									? theme.palette.grey[500]
									: theme.palette.grey[300],
							padding: "6px 12px",
							display: "flex",
							alignItems: "center",
							gap: "4px",
						}}
					>
						<FiberManualRecord
							sx={{ fontSize: "12px", color: "success.main" }}
						/>
						<Typography
							sx={{
								fontSize: "12px",
								color: "inherit",
							}}
						>
							Available for work
						</Typography>
					</Box>
				</RowBase>
			</SidebarFooterRoot>
		</SidebarRoot>
	);
}
