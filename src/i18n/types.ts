/** Site-wide locale codes. Ordered by display priority in the language menu. */
export type Locale = "zh-Hans" | "zh-Hant" | "ja" | "ko" | "en";

/** Node applied to `<html lang>` for each locale (also drives per-language CSS). */
export const htmlLang: Record<Locale, string> = {
  "zh-Hans": "zh-CN",
  "zh-Hant": "zh-TW",
  ja: "ja",
  ko: "ko",
  en: "en",
};

/**
 * Inline rich text. A paragraph is an ordered list of parts, keeping links and
 * emphasis explicit so translations stay type-safe and never inject raw HTML.
 */
export type Inline =
  | string
  | { strong: string }
  | { link: string; href: string; external?: boolean };

/** A block inside a privacy policy section. */
export type LegalNode =
  | { kind: "h3"; text: string }
  | { kind: "p"; content: Inline[] }
  | { kind: "list"; items: Inline[][] }
  | { kind: "note"; content: Inline[] }
  | { kind: "table"; aria: string; head: string[]; rows: string[][] }
  | { kind: "contact"; intro: Inline[]; email: string; note: Inline[] };

export interface PrivacySection {
  id: string;
  title: string;
  nodes: LegalNode[];
}

export type StyleId =
  | "classic"
  | "hasselblad"
  | "postage-stamp"
  | "centered-camera"
  | "hasselblad-frame"
  | "profile-camera"
  | "airmail-stamp"
  | "minimal-camera"
  | "film-frame"
  | "polaroid"
  | "editorial"
  | "fine-print";

export interface StyleCopy {
  name: string;
  description: string;
  tagline: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: Inline[];
}

/** One numbered step in the landing page workflow strip. */
export interface WorkflowStep {
  index: string;
  title: string;
  body: string;
}

/** A single capability tile in the landing page bento grid. */
export interface CapabilityTile {
  meta: string;
  title: string;
  body: string;
}

/** A headline number in the capability stats band. */
export interface CapabilityStat {
  value: string;
  label: string;
}

/** A retouch tool group, e.g. Light → [Exposure, Contrast, Highlights]. */
export interface RetouchGroup {
  name: string;
  params: string[];
}

export interface Messages {
  /** Native name of the language, shown in the switcher. */
  localeLabel: string;
  brand: string;
  meta: {
    home: { title: string; description: string };
  };
  common: {
    skipToMain: string;
    skipToPolicy: string;
    home: string;
    privacy: string;
    exploreStyles: string;
  };
  header: {
    brandAria: string;
    navAria: string;
    navStyles: string;
    navDetails: string;
    navPrivacy: string;
    cta: string;
    backToHome: string;
    languageAria: string;
    languageMenuAria: string;
  };
  footer: {
    tagline: string;
    navAria: string;
    contact: string;
    copyright: string;
  };
  hero: {
    introNote: string;
    titleLines: [string, string];
    titleMark: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    footnote: string;
    artAria: string;
    backCaption: string;
    printTitle: string;
    printStory: string;
    tagSmall: string;
    tagStrong: string;
    signature: string;
    stampLines: [string, string];
    photoAlt: string;
    bottomLead: string;
    bottomLeadStrong: string;
    chips: string[];
  };
  styles: {
    kicker: string;
    titleLines: [string, string];
    blurb: string;
    filterAria: string;
    filterAll: string;
    filterBasic: string;
    filterPro: string;
    labelAll: string;
    labelBasic: string;
    labelPro: string;
    hint: string;
    tierPro: string;
    tierBasic: string;
    count: string;
    closeAria: string;
    dialogPro: string;
    dialogBasic: string;
    items: Record<StyleId, StyleCopy>;
  };
  playground: {
    kicker: string;
    titleLines: [string, string];
    blurb: string;
    stageLabel: string;
    demoBrand: string;
    initialCaption: string;
    defaultCaption: string;
    location: string;
    stageFootnote: string;
    controlsTitle: string;
    controlsBadge: string;
    layoutLegend: string;
    layoutClassic: string;
    layoutMinimal: string;
    layoutStamp: string;
    captionLabel: string;
    captionLimit: number;
    toneLegend: string;
    toneLight: string;
    toneDark: string;
    saturationLabel: string;
    saturationLow: string;
    saturationHigh: string;
    reset: string;
    disclaimer: string;
    photoAlt: string;
  };
  workflow: {
    kicker: string;
    title: string;
    blurb: string;
    steps: WorkflowStep[];
  };
  details: {
    kicker: string;
    title: string;
    blurb: string;
    exifFocal: string;
    exifAperture: string;
    exifShutter: string;
    exifIso: string;
    exifDate: string;
    exifLocation: string;
    exifAuto: string;
    exifConfirm: string;
    exifTitle: string;
    exifBody: string;
    exifNote: string;
    retouchTitle: string;
    retouchBody: string;
    retouchBadge: string;
    retouchHint: string;
    retouchGroups: RetouchGroup[];
  };
  capabilities: {
    kicker: string;
    title: string;
    blurb: string;
    tiles: {
      logos: CapabilityTile;
      typography: CapabilityTile;
      invert: CapabilityTile;
      batch: CapabilityTile;
      export: CapabilityTile;
      languages: CapabilityTile;
    };
    statsAria: string;
    stats: CapabilityStat[];
  };
  privacyBanner: {
    kicker: string;
    titleLines: [string, string];
    body: string;
    link: string;
  };
  faq: {
    kicker: string;
    title: string;
    writeUs: string;
    items: FaqItem[];
  };
  closing: {
    lead: string;
    title: string;
    cta: string;
    note: string;
  };
}
