import {
	Box,
	IconButton,
	InputBase,
	Slide,
	styled,
	Typography,
	useTheme,
} from "@mui/material";
import { DollarSign, Terminal as TerminalIcon, X } from "lucide-react";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTerminalStore } from "store/terminal-store";
import { TerminalLine, useTerminalRunner } from "./commands";

const TERMINAL_HEIGHT = 256;

const TerminalRoot = styled(Box)(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	bottom: 0,
	height: `${TERMINAL_HEIGHT}px`,
	zIndex: theme.zIndex.modal,
	display: "flex",
	flexDirection: "column",
	willChange: "transform",
	transform: "translateZ(0)",
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
	borderTop: `1px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[300]
			: theme.palette.grey[400]
	}`,
}));

const TitleBar = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "8px",
	flexShrink: 0,
	height: "40px",
	padding: "0 12px",
	borderBottom: `3px solid ${theme.palette.grey[300]}`,
	color: theme.palette.text.secondary,
}));

const BodyRoot = styled(Box)({
	flex: 1,
	minHeight: 0,
	display: "flex",
	flexDirection: "column",
});

const OutputArea = styled(Box)({
	flex: 1,
	overflow: "auto",
	padding: "12px 16px 0",
});

const PromptRow = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "8px",
	flexShrink: 0,
	padding: "8px 16px 12px",
});

export function Terminal() {
	const theme = useTheme();
	const { t } = useTranslation();
	const isOpen = useTerminalStore((s) => s.isOpen);
	const greetingShown = useTerminalStore((s) => s.greetingShown);
	const close = useTerminalStore((s) => s.close);
	const markGreetingShown = useTerminalStore((s) => s.markGreetingShown);

	const { run } = useTerminalRunner();

	const [lines, setLines] = useState<TerminalLine[]>([]);
	const [command, setCommand] = useState("");
	const [submittedCommands, setSubmittedCommands] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const outputRef = useRef<HTMLDivElement>(null);

	const greeting = t("terminal::greeting");

	useEffect(() => {
		if (isOpen && !greetingShown) {
			setLines([{ kind: "out", text: greeting }]);
			markGreetingShown();
		}
	}, [isOpen, greetingShown, markGreetingShown, greeting]);

	useEffect(() => {
		if (outputRef.current) {
			outputRef.current.scrollTop = outputRef.current.scrollHeight;
		}
	}, [lines]);

	const runCommand = (raw: string) => {
		setLines((prev) => [...prev, { kind: "in", text: `$ ${raw}` }]);

		const result = run(raw);

		if (result.type === "output") {
			setLines((prev) => [...prev, ...result.lines]);
		} else if (result.type === "clear") {
			setLines([{ kind: "out", text: greeting }]);
		} else if (result.type === "exit") {
			close();
		}

		setSubmittedCommands((prev) => [...prev, raw]);
		setHistoryIndex(-1);
		setCommand("");
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			const trimmed = command.trim();
			if (trimmed) {
				runCommand(command);
			}
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			if (submittedCommands.length === 0) {
				return;
			}
			const nextIndex =
				historyIndex === -1
					? submittedCommands.length - 1
					: Math.max(0, historyIndex - 1);
			setHistoryIndex(nextIndex);
			setCommand(submittedCommands[nextIndex]);
		} else if (event.key === "ArrowDown") {
			event.preventDefault();
			if (historyIndex === -1) {
				return;
			}
			const nextIndex = historyIndex + 1;
			if (nextIndex >= submittedCommands.length) {
				setHistoryIndex(-1);
				setCommand("");
			} else {
				setHistoryIndex(nextIndex);
				setCommand(submittedCommands[nextIndex]);
			}
		}
	};

	return (
		<Slide
			direction="up"
			in={isOpen}
			onEntered={() => inputRef.current?.focus()}
		>
			<TerminalRoot>
				<TitleBar>
					<Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<TerminalIcon size="16px" />
						<Typography
							sx={{
								fontSize: "14px",
								color: "inherit",
							}}
						>
							{t("terminal::title")}
						</Typography>
					</Box>
					<IconButton
						onClick={close}
						aria-label={t("terminal::close")}
						sx={{
							height: "32px",
							width: "32px",
							color: theme.palette.text.secondary,
						}}
					>
						<X size={22} />
					</IconButton>
				</TitleBar>
				<BodyRoot>
					<OutputArea ref={outputRef}>
						{lines.map((line, index) => (
							<Typography
								key={index}
								sx={{
									fontSize: "14px",
									lineHeight: 1.6,
									whiteSpace: "pre-wrap",
									wordBreak: "break-word",
									userSelect: "text",
									color:
										line.kind === "err"
											? theme.palette.error.main
											: line.kind === "in"
												? theme.palette.text.secondary
												: theme.palette.text.primary,
								}}
							>
								{line.text}
							</Typography>
						))}
					</OutputArea>
					<PromptRow>
						<DollarSign size={16} color={theme.palette.primary.main} />
						<InputBase
							inputRef={inputRef}
							value={command}
							onChange={(event) => setCommand(event.target.value)}
							onKeyDown={handleKeyDown}
							placeholder=""
							aria-label={t("terminal::commandInput")}
							inputProps={{
								style: {
									fontSize: "14px",
									color: theme.palette.text.primary,
									padding: 0,
								},
							}}
							sx={{
								flex: 1,
								caretColor: theme.palette.primary.main,
							}}
						/>
					</PromptRow>
				</BodyRoot>
			</TerminalRoot>
		</Slide>
	);
}
