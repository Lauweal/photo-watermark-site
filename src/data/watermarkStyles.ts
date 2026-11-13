import type { StyleId } from "../i18n/types";

export type StyleTier = "basic" | "pro";

export interface WatermarkStyle {
  id: StyleId;
  file: string;
  tier: StyleTier;
  width: number;
  height: number;
}

/** Visual catalogue; all human-readable copy lives in the i18n messages. */
export const watermarkStyles: WatermarkStyle[] = [
  { id: "classic", file: "classic.jpg", tier: "basic", width: 1280, height: 1313 },
  { id: "hasselblad", file: "hasselblad.jpg", tier: "basic", width: 1280, height: 855 },
  {
    id: "postage-stamp",
    file: "postage-stamp.jpg",
    tier: "pro",
    width: 1280,
    height: 1871,
  },
  {
    id: "centered-camera",
    file: "centered-camera.jpg",
    tier: "basic",
    width: 1049,
    height: 922,
  },
  {
    id: "hasselblad-frame",
    file: "hasselblad-frame.jpg",
    tier: "pro",
    width: 1280,
    height: 1220,
  },
  {
    id: "profile-camera",
    file: "profile-camera.jpg",
    tier: "pro",
    width: 1280,
    height: 1010,
  },
  {
    id: "airmail-stamp",
    file: "airmail-stamp.jpg",
    tier: "pro",
    width: 1280,
    height: 1871,
  },
  {
    id: "minimal-camera",
    file: "minimal-camera.jpg",
    tier: "pro",
    width: 1206,
    height: 1007,
  },
];
