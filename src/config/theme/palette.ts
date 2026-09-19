import { alpha } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";

function createGradient(color1: string, color2: string): string {
	return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

type Shades = {
	lighter: string;
	light: string;
	main: string;
	dark: string;
	darker: string;
};

type GreyTone = {
	0: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
};

type GreyScale = GreyTone & {
	500_8: string;
	500_12: string;
	500_16: string;
	500_24: string;
	500_32: string;
	500_48: string;
	500_56: string;
	500_80: string;
};

// LIGHT THEME

const PRIMARY_LIGHT: Shades = {
	lighter: "#E0E8EA",
	light: "#B8CACE",
	main: "#004351",
	dark: "#003844",
	darker: "#002831",
};

const SECONDARY_LIGHT: Shades = {
	lighter: "#F0F2F4",
	light: "#E8EBEE",
	main: "#DEE2E7",
	dark: "#BFC2C7",
	darker: "#A0A3A6",
};

const SUCCESS_LIGHT: Shades = {
	lighter: "#DCEBE1",
	light: "#B5D5BF",
	main: "#087228",
	dark: "#075D21",
	darker: "#054217",
};

const WARNING_LIGHT: Shades = {
	lighter: "#FFF8E1",
	light: "#FFEEBA",
	main: "#FFC107",
	dark: "#DBA606",
	darker: "#997404",
};

const ERROR_LIGHT: Shades = {
	lighter: "#F7E1E1",
	light: "#ECB9BA",
	main: "#BC0407",
	dark: "#A20306",
	darker: "#710204",
};

const GREY_LIGHT: GreyTone = {
	0: "#FFFFFF",
	100: "#F2F4F7",
	200: "#DEE2E7",
	300: "#B6BBC0",
	400: "#73777C",
	500: "#505459",
	600: "#383C41",
	700: "#202429",
	800: "#121417",
	900: "#020203",
};

// DARK THEME

const PRIMARY_DARK: Shades = {
	lighter: "#E8F7F7",
	light: "#C0E8E8",
	main: "#1ad1d1",
	dark: "#038889",
	darker: "#026465",
};

const SECONDARY_DARK: Shades = {
	lighter: "#3B4046",
	light: "#262A2E",
	main: "#040507",
	dark: "#030406",
	darker: "#020304",
};

const SUCCESS_DARK: Shades = {
	lighter: "#E9F6ED",
	light: "#C3E5CD",
	main: "#0E9837",
	dark: "#0C802E",
	darker: "#095E22",
};

const WARNING_DARK: Shades = {
	lighter: "#FFF8EB",
	light: "#FFEDC7",
	main: "#FFB61E",
	dark: "#DB9D1A",
	darker: "#9E7113",
};

const ERROR_DARK: Shades = {
	lighter: "#FDEBEA",
	light: "#FBC6C6",
	main: "#EE1C1A",
	dark: "#CD1816",
	darker: "#941110",
};

const GREY_DARK: GreyTone = {
	0: "#FFFFFF",
	100: "#BDC8D4",
	200: "#7F8893",
	300: "#5C636E",
	400: "#404751",
	500: "#262A31",
	600: "#171A1F",
	700: "#060709",
	800: "#020304",
	900: "#010202",
};

const CHART_LIGHT = ["#004351", "#036333", "#835206", "#4722A1", "#C1120A"];

const CHART_DARK = ["#03A2A3", "#078645", "#B3720B", "#6435D4", "#FE2215"];

function createGrey(grey: GreyTone): GreyScale {
	return {
		...grey,
		500_8: alpha(grey[500], 0.08),
		500_12: alpha(grey[500], 0.12),
		500_16: alpha(grey[500], 0.16),
		500_24: alpha(grey[500], 0.24),
		500_32: alpha(grey[500], 0.32),
		500_48: alpha(grey[500], 0.48),
		500_56: alpha(grey[500], 0.56),
		500_80: alpha(grey[500], 0.8),
	};
}

function palette(mode: ThemeMode) {
	const isLight = mode === "light";
	const primary = isLight ? PRIMARY_LIGHT : PRIMARY_DARK;
	const secondary = isLight ? SECONDARY_LIGHT : SECONDARY_DARK;
	const success = isLight ? SUCCESS_LIGHT : SUCCESS_DARK;
	const warning = isLight ? WARNING_LIGHT : WARNING_DARK;
	const error = isLight ? ERROR_LIGHT : ERROR_DARK;
	const grey = isLight ? createGrey(GREY_LIGHT) : createGrey(GREY_DARK);

	const background = {
		default: isLight ? "#F2F4F7" : "#0f1318",
		paper: isLight ? "#FFFFFF" : "#020304",
		neutral: isLight ? "#DEE2E7" : "#040507",
	};

	const text = {
		primary: isLight ? "#020203" : "#BDC8D4",
		secondary: isLight ? "#202429" : "#7F8893",
		disabled: grey[500],
	};

	return {
		mode,
		common: { black: "#000", white: "#fff" },
		primary: { ...primary, contrastText: isLight ? "#F7F7F7" : "#010203" },
		secondary: { ...secondary, contrastText: isLight ? "#050607" : "#BDC8D4" },
		success: { ...success, contrastText: "#fff" },
		warning: { ...warning, contrastText: isLight ? "#121417" : "#010202" },
		error: { ...error, contrastText: "#fff" },
		grey,
		gradients: {
			primary: createGradient(primary.light, primary.main),
			success: createGradient(success.light, success.main),
			warning: createGradient(warning.light, warning.main),
			error: createGradient(error.light, error.main),
		},
		chart: isLight ? CHART_LIGHT : CHART_DARK,
		text,
		background,
		action: {
			active: isLight ? grey[600] : grey[300],
			hover: grey[500_8],
			selected: grey[500_16],
			disabled: grey[500_80],
			disabledBackground: grey[500_24],
			focus: grey[500_24],
			hoverOpacity: 0.08,
			disabledOpacity: 0.48,
		},
		divider: grey[500_24],
	};
}

export default palette;
