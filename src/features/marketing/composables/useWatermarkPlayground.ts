import type { ComponentPublicInstance } from "vue";
import { computed, reactive, watch } from "vue";
import { useAnimate } from "motion-v";
import { useSiteMotion } from "../../../composables/useSiteMotion";
import { useI18n } from "../../../i18n";

export function useWatermarkPlayground() {
  type Layout =
    | "classic"
    | "minimal"
    | "stamp"
    | "film-frame"
    | "polaroid"
    | "editorial"
    | "fine-print";
  type Tone = "light" | "dark";
  const { messages } = useI18n();
  const initialState = computed(() => ({
    layout: "classic" as Layout,
    tone: "light" as Tone,
    caption: messages.value.playground.initialCaption,
    saturation: 100,
  }));
  const state = reactive({ ...initialState.value });
  const [preview, animate] = useAnimate<HTMLElement>();
  let previewAnimation: ReturnType<typeof animate> | undefined;
  const layouts = computed<{ id: Layout; label: string }[]>(() => [
    { id: "classic", label: messages.value.playground.layoutClassic },
    { id: "minimal", label: messages.value.playground.layoutMinimal },
    { id: "stamp", label: messages.value.playground.layoutStamp },
    { id: "film-frame", label: messages.value.styles.items["film-frame"].name },
    { id: "polaroid", label: messages.value.styles.items.polaroid.name },
    { id: "editorial", label: messages.value.styles.items.editorial.name },
    { id: "fine-print", label: messages.value.styles.items["fine-print"].name },
  ]);
  const tones = computed<{ id: Tone; label: string }[]>(() => [
    { id: "light", label: messages.value.playground.toneLight },
    { id: "dark", label: messages.value.playground.toneDark },
  ]);
  const { reducedMotion, transition, pressScale } = useSiteMotion();

  // Keep the demo caption in sync with the locale while the user hasn't edited it.
  watch(
    () => messages.value.playground.initialCaption,
    (next, previous) => {
      if (state.caption === previous) state.caption = next;
    },
  );

  function animatePreview() {
    previewAnimation?.cancel();
    if (reducedMotion.value || !preview.value) return;
    previewAnimation = animate(
      preview.value,
      { opacity: [0.55, 1], y: [6, 0], rotate: -3 },
      { ...transition.value, duration: 0.32 },
    );
  }
  watch([() => state.layout, () => state.tone], animatePreview, {
    flush: "post",
  });
  watch(reducedMotion, (reduced) => {
    if (!reduced) return;
    previewAnimation?.cancel();
    if (preview.value)
      animate(preview.value, { opacity: 1, y: 0, rotate: -3 }, { duration: 0 });
  });
  function reset() {
    const initial = initialState.value;
    const appearanceChanges =
      state.layout !== initial.layout || state.tone !== initial.tone;
    Object.assign(state, initial);
    if (!appearanceChanges) animatePreview();
  }
  const setPreviewElement = (
    element: Element | ComponentPublicInstance | null,
  ) => {
    const target = element && "$el" in element ? element.$el : element;
    if (target instanceof HTMLElement) preview.value = target;
  };
  return {
    state,
    setPreviewElement,
    reducedMotion,
    layouts,
    tones,
    pressScale,
    transition,
    reset,
  };
}
