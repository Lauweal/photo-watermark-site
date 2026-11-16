import type { ComponentPublicInstance } from "vue";
import { computed, nextTick, onBeforeUnmount, ref, shallowRef } from "vue";
import { useAnimate } from "motion-v";
import {
  watermarkStyles,
  type WatermarkStyle,
  type StyleTier,
} from "../model/watermarkStyles";
import { useSiteMotion } from "../../../composables/useSiteMotion";
import { interpolate, useI18n } from "../../../i18n";

export function useStyleGallery() {
  const { messages } = useI18n();

  type Filter = "all" | StyleTier;
  const filter = ref<Filter>("all");
  const filters = computed<{ id: Filter; label: string }[]>(() => [
    { id: "all", label: messages.value.styles.filterAll },
    { id: "basic", label: messages.value.styles.filterBasic },
    { id: "pro", label: messages.value.styles.filterPro },
  ]);
  const visibleStyles = computed(() =>
    watermarkStyles.filter(
      (style) => filter.value === "all" || style.tier === filter.value,
    ),
  );
  const filterLabel = computed(
    () =>
      ({
        all: messages.value.styles.labelAll,
        basic: messages.value.styles.labelBasic,
        pro: messages.value.styles.labelPro,
      })[filter.value],
  );
  const statusText = computed(() =>
    interpolate(messages.value.styles.count, {
      label: filterLabel.value,
      count: visibleStyles.value.length,
    }),
  );
  const selectedStyle = shallowRef<WatermarkStyle | null>(null);
  const dialog = ref<HTMLDialogElement>();
  const closing = ref(false);
  const [dialogContent, animate] = useAnimate<HTMLDivElement>();
  const { reducedMotion, transition, pressScale } = useSiteMotion();

  async function openPreview(event: MouseEvent, style: WatermarkStyle) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !dialog.value?.showModal
    )
      return;
    event.preventDefault();
    selectedStyle.value = style;
    await nextTick();
    dialog.value.showModal();
    document.body.classList.add("modal-open");
    if (dialogContent.value && !reducedMotion.value) {
      animate(
        dialogContent.value,
        { opacity: [0, 1], y: [12, 0], scale: [0.98, 1] },
        { duration: 0.28 },
      );
    }
  }

  async function closePreview() {
    if (closing.value || !dialog.value?.open) return;
    closing.value = true;
    try {
      if (dialogContent.value && !reducedMotion.value) {
        await animate(
          dialogContent.value,
          { opacity: 0, y: 8 },
          { duration: 0.16 },
        );
      }
      dialog.value?.close();
    } finally {
      closing.value = false;
    }
  }

  function onDialogClosed() {
    document.body.classList.remove("modal-open");
    selectedStyle.value = null;
  }

  function onBackdropClick(event: MouseEvent) {
    if (event.target !== dialog.value) return;
    const bounds = dialog.value.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      void closePreview();
  }

  onBeforeUnmount(() => {
    dialog.value?.close();
    document.body.classList.remove("modal-open");
  });
  const setDialogElement = (
    element: Element | ComponentPublicInstance | null,
  ) => {
    dialog.value =
      element instanceof HTMLElement
        ? (element as HTMLDialogElement)
        : undefined;
  };
  const setDialogContentElement = (
    element: Element | ComponentPublicInstance | null,
  ) => {
    if (element instanceof HTMLElement)
      dialogContent.value = element as HTMLDivElement;
  };
  return {
    filter,
    filters,
    visibleStyles,
    statusText,
    selectedStyle,
    setDialogElement,
    setDialogContentElement,
    reducedMotion,
    transition,
    pressScale,
    openPreview,
    closePreview,
    onDialogClosed,
    onBackdropClick,
  };
}
