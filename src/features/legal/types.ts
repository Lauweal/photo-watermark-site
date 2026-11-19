export type LegalDocumentId = "purchase" | "auto-renewal" | "privacy" | "user";

export interface LegalDocument {
  title: string;
  sections: { heading: string; body: string }[];
}

export interface LegalCopy {
  notice: string;
  originalNotice: string;
  showOriginal: string;
  showTranslation: string;
  kicker: string;
  toc: string;
  contact: string;
  skip: string;
  back: string;
}

export interface LegalBundle {
  language: string;
  sourceHash: string;
  method: "source" | "machine-assisted";
  copy: LegalCopy;
  documents: Record<LegalDocumentId, LegalDocument>;
}
