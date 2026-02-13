import React from "react";
import ReactDOM from "react-dom/client";
import "./locales";
import Homepage from "./views/homepage";
import { ThemeConfig } from "./config/theme/theme-config";

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
