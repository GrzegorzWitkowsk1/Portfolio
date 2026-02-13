import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import { settings } from "../consts";

import pl from "./pl-PL.json";
import en from "./en-EN.json";

const resources = {
	"pl-PL": {
		TRANSLATION: pl,
	},
	"en-EN": {
		TRANSLATION: en,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: settings.defaultLang,
	fallbackLng: settings.fallbackLang,
	interpolation: {
		escapeValue: false,
	},
	debug: false,
});

export default i18n;
