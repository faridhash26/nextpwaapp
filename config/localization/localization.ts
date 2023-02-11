import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
// custom
import { I18 } from "./i18.model";
import { fa } from "./fa";

interface LocalizationModel extends LocalizedStringsMethods, I18 {}

export const Localization: LocalizationModel = new LocalizedStrings({
  fa: fa,
});

Localization.setLanguage("fa");
