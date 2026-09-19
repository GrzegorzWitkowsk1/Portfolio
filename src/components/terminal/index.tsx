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

	const [showGreeting, setShowGreeting] = useState(false);
	const [command, setCommand] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isOpen && !greetingShown) {
			setShowGreeting(true);
			markGreetingShown();
		}
	}, [isOpen, greetingShown, markGreetingShown]);

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			setCommand("");
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
					<OutputArea>
						{showGreeting && (
							<Typography
								sx={{
									fontSize: "14px",
									lineHeight: 1.6,
									color: theme.palette.text.primary,
								}}
							>
								{t("terminal::greeting")}
							</Typography>
						)}
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
