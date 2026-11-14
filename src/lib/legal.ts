import documents from "../data/legal-documents.generated.json";
import readingCopy from "../data/legal-copy.generated.json";
import { legalBundleLoaders } from "../data/legal-locales.generated";
import type { LegalBundle } from "../../../src/features/legal/types";
import type { Inline, Locale } from "../i18n/types";

export type LegalDocumentId = keyof typeof documents;
export const legalDocumentIds = [
  "purchase",
  "auto-renewal",
  "privacy",
  "user",
] as const;
export const legalContactEmail = "soratani@126.com";
export { documents as legalDocuments };
export { readingCopy as legalReadingCopy };

const bundleCache = new Map<Locale, Promise<LegalBundle>>();
export function getWebLegalBundle(locale: Locale) {
  let bundle = bundleCache.get(locale);
  if (!bundle) {
    bundle = legalBundleLoaders[locale]().catch((error: unknown) => {
      bundleCache.delete(locale);
      throw error;
    });
    bundleCache.set(locale, bundle);
  }
  return bundle;
}

export function isLegalDocumentId(value: unknown): value is LegalDocumentId {
  return typeof value === "string" && Object.hasOwn(documents, value);
}

interface LegalCopy {
  kicker: string;
  sourceNote: string;
  toc: string;
  contact: string;
  skip: string;
  loadError: string;
  retry: string;
  titles: Record<LegalDocumentId, string>;
}

export const legalCopy: Record<Locale, LegalCopy> = {
  "zh-Hans": {
    kicker: "协议与信息保护",
    sourceNote: readingCopy["zh-Hans"].originalNotice,
    toc: "阅读导航",
    contact: "联系运营者",
    skip: "跳至协议正文",
    loadError: "暂时无法加载协议，请重试。",
    retry: "重试",
    titles: {
      purchase: "购买协议",
      "auto-renewal": "自动续费服务协议",
      privacy: "隐私政策",
      user: "用户协议",
    },
  },
  "zh-Hant": {
    kicker: "協議與資訊保護",
    sourceNote: readingCopy["zh-Hant"].notice,
    toc: "閱讀導覽",
    contact: "聯絡營運者",
    skip: "跳至協議內文",
    loadError: "暫時無法載入協議，請重試。",
    retry: "重試",
    titles: {
      purchase: "購買協議",
      "auto-renewal": "自動續費服務協議",
      privacy: "隱私政策",
      user: "使用者協議",
    },
  },
  ja: {
    kicker: "規約と情報保護",
    sourceNote: readingCopy.ja.notice,
    toc: "目次",
    contact: "運営者へのお問い合わせ",
    skip: "規約本文へスキップ",
    loadError: "規約を読み込めませんでした。もう一度お試しください。",
    retry: "再試行",
    titles: {
      purchase: "購入規約",
      "auto-renewal": "自動更新サービス規約",
      privacy: "プライバシーポリシー",
      user: "利用規約",
    },
  },
  ko: {
    kicker: "약관 및 정보 보호",
    sourceNote: readingCopy.ko.notice,
    toc: "목차",
    contact: "운영자 문의",
    skip: "약관 본문으로 건너뛰기",
    loadError: "약관을 불러오지 못했습니다. 다시 시도해 주세요.",
    retry: "다시 시도",
    titles: {
      purchase: "구매 약관",
      "auto-renewal": "자동 갱신 서비스 약관",
      privacy: "개인정보 처리방침",
      user: "이용 약관",
    },
  },
  en: {
    kicker: "Agreements & Privacy",
    sourceNote: readingCopy.en.notice,
    toc: "On This Page",
    contact: "Contact the Operator",
    skip: "Skip to agreement content",
    loadError: "The agreement could not be loaded. Please try again.",
    retry: "Retry",
    titles: {
      purchase: "Purchase Agreement",
      "auto-renewal": "Auto-Renewal Agreement",
      privacy: "Privacy Policy",
      user: "User Agreement",
    },
  },
};

export type LegalBlock =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; content: Inline[] }
  | { kind: "list"; start: number; items: Inline[][] };

// Render only the Markdown used by docs/, without injecting raw HTML.
export function legalInline(text: string): Inline[] {
  const parts: Inline[] = [];
  const pattern = /\*\*([^*]+)\*\*|https:\/\/[^\s。；，、<>]+/g;
  let cursor = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    if (match[1]) {
      parts.push({ strong: match[1] });
    } else {
      const href = match[0].replace(/[.,;:!?؛،।॥。；，、）)\]}]+$/u, "");
      parts.push({ link: href, href, external: true });
      if (href.length < match[0].length) parts.push(match[0].slice(href.length));
    }
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

export function legalBlocks(body: string): LegalBlock[] {
  return body.split(/\n\s*\n/).map((paragraph) => {
    if (paragraph.startsWith("### ")) {
      return { kind: "heading", text: paragraph.slice(4) };
    }
    if (/^\d+\.\s/.test(paragraph)) {
      // A wrapped line belongs to the preceding item, not a new paragraph.
      const items = paragraph.split(/\n(?=\d+\.\s)/);
      return {
        kind: "list",
        start: Number.parseInt(paragraph, 10),
        items: items.map((item) => legalInline(item.replace(/^\d+\.\s/, ""))),
      };
    }
    return { kind: "paragraph", content: legalInline(paragraph) };
  });
}
