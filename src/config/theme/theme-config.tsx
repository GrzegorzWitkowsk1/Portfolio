import {
	createTheme,
	CssBaseline,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material";
import { ReactNode, useMemo } from "react";
import palette from "./palette";

type ThemeConfigProps = {
	children: ReactNode;
};

export function ThemeConfig({ children }: ThemeConfigProps) {
	const theme = useMemo(() => {
		const baseTheme = createTheme({
			palette: { ...palette },
		});

		return baseTheme;
	}, []);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
}
