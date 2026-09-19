import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import i18n from "locales";
import { settings } from "consts";

export type LanguageCode = "pl-PL" | "en-EN";

type LanguageContextValue = {
	lang: LanguageCode;
	setLang: (lang: LanguageCode) => void;
};

const STORAGE_KEY = "language";

const LanguageContext = createContext<LanguageContextValue | undefined>(
	undefined,
);

function getInitialLang(): LanguageCode {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === "pl-PL" || stored === "en-EN") {
		return stored;
	}
	return settings.defaultLang === "pl-PL" ? "pl-PL" : "en-EN";
}

export function LanguageConfig({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<LanguageCode>(getInitialLang);

	useEffect(() => {
		i18n.changeLanguage(lang);
		localStorage.setItem(STORAGE_KEY, lang);
		document.documentElement.removeAttribute("dir");
		Array.from(document.documentElement.attributes).forEach((attribute) => {
			if (attribute.name.startsWith("__react")) {
				document.documentElement.removeAttribute(attribute.name);
			}
		});
	}, [lang]);

	const value = useMemo(
		() => ({
			lang,
			setLang,
		}),
		[lang],
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage(): LanguageContextValue {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within LanguageConfig");
	}
	return context;
}
