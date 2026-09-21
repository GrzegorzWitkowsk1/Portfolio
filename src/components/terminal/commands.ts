import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { about } from "config/about-data";
import { getFileIcon } from "config/file-icon";
import { useThemeMode } from "config/theme/theme-config";
import { projects, workExperience } from "consts";
import { FolderName, useNavigationStore } from "store/navigation-store";

export type TerminalLineKind = "in" | "out" | "err";

export type TerminalLine = {
	kind: TerminalLineKind;
	text: string;
};

export type CommandResult =
	| { type: "output"; lines: TerminalLine[] }
	| { type: "clear" }
	| { type: "exit" };

const COMMAND_COL_WIDTH = 22;

const ROOT_FILES = ["about-me.tsx", "new-message.tsx"];

function renderChildren(items: string[], prefix: string): string[] {
	return items.map((item, index) => {
		const isLast = index === items.length - 1;
		return `${prefix}${isLast ? "└── " : "├── "}${item}`;
	});
}

export function buildLsTree(): string {
	const projectNames = projects.map((project) => project.sidebarName);
	const workNames = workExperience.map((entry) => entry.sidebarName);

	const lines = ["."];
	ROOT_FILES.forEach((file) => lines.push(`├── ${file}`));
	lines.push("├── projects");
	lines.push(...renderChildren(projectNames, "│   "));
	lines.push("└── work-experience");
	lines.push(...renderChildren(workNames, "    "));

	return lines.join("\n");
}

function findFileMatches(
	fileName: string,
): { label: string; folder: FolderName | undefined }[] {
	const matches: { label: string; folder: FolderName | undefined }[] = [];

	if (ROOT_FILES.includes(fileName)) {
		matches.push({ label: fileName, folder: undefined });
	}
	if (projects.some((project) => project.sidebarName === fileName)) {
		matches.push({ label: fileName, folder: "projects" });
	}
	if (workExperience.some((entry) => entry.sidebarName === fileName)) {
		matches.push({ label: fileName, folder: "work-experience" });
	}

	return matches;
}

const SOCIAL_LABELS: Record<string, string> = {
	Github: "Github",
	Linkedin: "LinkedIn",
	Email: "Email",
};

export function useTerminalRunner() {
	const theme = useTheme();
	const { t } = useTranslation();
	const { mode, toggleMode } = useThemeMode();
	const openFile = useNavigationStore((s) => s.openFile);

	const output = (lines: TerminalLine[]): CommandResult => ({
		type: "output",
		lines,
	});

	const commands: Record<string, (args: string[]) => CommandResult> = {
		help: () =>
			output([
				{ kind: "out", text: t("terminal::availableCommands") },
				...[
					["help", t("terminal::commands::help")],
					["ls", t("terminal::commands::ls")],
					["whoami", t("terminal::commands::whoami")],
					["socials", t("terminal::commands::socials")],
					["open <file>", t("terminal::commands::open")],
					["theme", t("terminal::commands::theme")],
					["clear", t("terminal::commands::clear")],
					["exit", t("terminal::commands::exit")],
				].map(([name, description]) => ({
					kind: "out" as const,
					text: `${(name as string).padEnd(COMMAND_COL_WIDTH)}${description as string}`,
				})),
			]),

		ls: () => output([{ kind: "out", text: buildLsTree() }]),

		whoami: () =>
			output([
				{ kind: "out", text: `${about.name} - ${t("aboutMe::role")}` },
				{ kind: "out", text: t("aboutMe::description") },
			]),

		socials: () => {
			const socials = about.links
				.filter((link) => link.label !== "CV")
				.map(
					(link) =>
						`${SOCIAL_LABELS[link.label] ?? link.label} - ${link.handle}`,
				)
				.join("\n");

			return output([{ kind: "out", text: socials }]);
		},

		open: (args) => {
			const fileName = args[0];

			if (!fileName) {
				return output([{ kind: "err", text: t("terminal::openUsage") }]);
			}

			const matches = findFileMatches(fileName);

			if (matches.length === 0) {
				return output([
					{
						kind: "err",
						text: t("terminal::openNoSuchFile", { file: fileName }),
					},
				]);
			}

			matches.forEach(({ label, folder }) => {
				const { id, icon } = getFileIcon(label, folder, theme);
				openFile({ id, label, icon });
			});

			return output([]);
		},

		theme: () => {
			const nextMode = mode === "light" ? "dark" : "light";
			toggleMode();
			return output([
				{ kind: "out", text: t("terminal::themeSwitched", { mode: nextMode }) },
			]);
		},

		clear: () => ({ type: "clear" }),

		exit: () => ({ type: "exit" }),
	};

	const run = (raw: string): CommandResult => {
		const trimmed = raw.trim();
		const [first, ...args] = trimmed.split(/\s+/);
		const name = first?.toLowerCase() ?? "";
		const handler = commands[name];

		if (!handler) {
			return output([
				{
					kind: "err",
					text: t("terminal::commandNotFound", { command: name }),
				},
			]);
		}

		return handler(args);
	};

	return { run };
}
