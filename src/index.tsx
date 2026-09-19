import ReactDOM from "react-dom/client";
import React from "react";

import "@fontsource-variable/geist-mono";
import { Layout } from "components/layout";
import { ThemeConfig } from "config/theme/theme-config";
import { LanguageConfig } from "config/language/language-config";
import "./locales";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeConfig>
			<LanguageConfig>
				<Layout />
			</LanguageConfig>
		</ThemeConfig>
	</React.StrictMode>,
);
