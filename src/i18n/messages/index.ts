import type { Locale, Messages } from "../types";
import { en } from "./en";
import { ja } from "./ja";
import { ko } from "./ko";
import { zhHans } from "./zh-Hans";
import { zhHant } from "./zh-Hant";

export const catalogs: Record<Locale, Messages> = {
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  ja,
  ko,
  en,
};
