import { computed, ref, watch } from "vue";
import { catalogs } from "./messages";
import { htmlLang, type Locale } from "./types";

export type { Inline, LegalNode, Locale, Messages, PrivacySection } from "./types";

const STORAGE_KEY = "wm-site-locale";

/** Order used in the language menu. */
export const localeCodes: Locale[] = ["zh-Hans", "zh-Hant", "ja", "ko", "en"];

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && localeCodes.includes(stored as Locale)) return stored as Locale;
  } catch {
    /* storage may be unavailable (private mode); fall back to the default */
  }
  return "zh-Hans";
}

const locale = ref<Locale>(readStoredLocale());

watch(
  locale,
  (value) => {
    document.documentElement.lang = htmlLang[value];
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore write failures */
    }
  },
  { immediate: true },
);

const messages = computed(() => catalogs[locale.value]);

/** Locale-aware text shared by the router and page shells. */
export function useI18n() {
  return {
    locale,
    messages,
    localeCodes,
    setLocale: (value: Locale) => {
      locale.value = value;
    },
  };
}

/** Replace `{name}` placeholders in a message string. */
export function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
