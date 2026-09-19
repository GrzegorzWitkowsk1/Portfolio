import { Theme } from "@mui/material";
import { Briefcase, FileBraces, Mail, User } from "lucide-react";
import { FolderName, Tab } from "store/navigation-store";

export function getFileIcon(
	label: string,
	folder: FolderName | undefined,
	theme: Theme,
): Pick<Tab, "icon" | "id"> {
	const id = folder ? `${folder}/${label}` : label;

	if (label === "about-me.tsx") {
		return { id, icon: <User size={16} color={theme.palette.success.main} /> };
	}
	if (label === "new-message.tsx") {
		return { id, icon: <Mail size={16} color={theme.palette.error.main} /> };
	}
	if (folder === "projects") {
		return {
			id,
			icon: <FileBraces size={16} color={theme.palette.warning.main} />,
		};
	}
	if (folder === "work-experience") {
		return { id, icon: <Briefcase size={16} color="#a87eeb" /> };
	}
	return {
		id,
		icon: <FileBraces size={16} color={theme.palette.text.secondary} />,
	};
}
