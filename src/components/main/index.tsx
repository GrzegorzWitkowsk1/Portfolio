import { Box, styled } from "@mui/material";

const MainRoot = styled(Box)(({ theme }) => ({
	flex: 1,
	minWidth: 0,
	backgroundColor: theme.palette.background.default,
}));

export function Main() {
	return <MainRoot />;
}
