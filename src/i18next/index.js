import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import am from "./am";

i18n.use(initReactI18next).init({
    resources: {
        en: en,
        am: am,
    },
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true
    }
});

export default i18n;
