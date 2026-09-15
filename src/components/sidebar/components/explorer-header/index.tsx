import { Box, styled, Typography, useTheme } from "@mui/material";

const ExplorerHeaderRoot = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	minHeight: "34px",
	padding: "0 14px",
	borderBottom: `1px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[300]
			: theme.palette.grey[400]
	}`,
}));

const TerminalDots = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "6px",
});

const Dot = styled(Box)({
	width: "12px",
	height: "12px",
	borderRadius: "50%",
});

const ExplorerTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontSize: "11px",
	letterSpacing: "1px",
	textTransform: "uppercase",
	userSelect: "none",
}));

export function ExplorerHeader() {
	const theme = useTheme();

	return (
		<ExplorerHeaderRoot>
			<TerminalDots>
				<Dot sx={{ bgcolor: theme.palette.error.main }} />
				<Dot sx={{ bgcolor: theme.palette.warning.main }} />
				<Dot sx={{ bgcolor: theme.palette.success.main }} />
			</TerminalDots>
			<ExplorerTitle>explorer</ExplorerTitle>
		</ExplorerHeaderRoot>
	);
}
