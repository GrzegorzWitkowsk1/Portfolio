import ReactDOM from "react-dom/client";
import React from "react";

import { ThemeConfig } from "config/theme/theme-config";
import Homepage from "./views/homepage";
import "./locales";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeConfig>
			<Homepage />
		</ThemeConfig>
	</React.StrictMode>,
);
