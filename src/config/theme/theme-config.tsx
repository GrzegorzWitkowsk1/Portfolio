import {
	createTheme,
	CssBaseline,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import palette, { ThemeMode } from "./palette";

type ThemeConfigProps = {
	children: ReactNode;
};

type ThemeModeContextValue = {
	mode: ThemeMode;
	toggleMode: () => void;
	setMode: (mode: ThemeMode) => void;
};

const STORAGE_KEY = "theme-mode";

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(
	undefined,
);

function getInitialMode(): ThemeMode {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === "light" || stored === "dark") {
		return stored;
	}
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export function ThemeConfig({ children }: ThemeConfigProps) {
	const [mode, setMode] = useState<ThemeMode>(getInitialMode);

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, mode);
	}, [mode]);

	const theme = useMemo(() => {
		return createTheme({
			palette: palette(mode),
			typography: {
				fontFamily:
					'"Geist Mono Variable", "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
			},
		});
	}, [mode]);

	const value = useMemo(
		() => ({
			mode,
			toggleMode: () =>
				setMode((prev) => (prev === "light" ? "dark" : "light")),
			setMode,
		}),
		[mode],
	);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ThemeModeContext.Provider value={value}>
					{children}
				</ThemeModeContext.Provider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export function useThemeMode(): ThemeModeContextValue {
	const context = useContext(ThemeModeContext);
	if (!context) {
		throw new Error("useThemeMode must be used within ThemeConfig");
	}
	return context;
}

export type { ThemeMode };
