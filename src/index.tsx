import ReactDOM from "react-dom/client";
import React from "react";

import "@fontsource-variable/geist-mono";
import { Layout } from "components/layout";
import { ThemeConfig } from "config/theme/theme-config";
import "./locales";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeConfig>
			<Layout />
		</ThemeConfig>
	</React.StrictMode>,
);
