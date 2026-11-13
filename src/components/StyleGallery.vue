<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, shallowRef } from "vue";
import { AnimatePresence, motion, useAnimate } from "motion-v";
import {
  watermarkStyles,
  type WatermarkStyle,
  type StyleTier,
} from "../data/watermarkStyles";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";
import { interpolate, useI18n } from "../i18n";

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
const filterLabel = computed(() =>
  filter.value === "all"
    ? messages.value.styles.labelAll
    : filter.value === "basic"
      ? messages.value.styles.labelBasic
      : messages.value.styles.labelPro,
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
</script>

<template>
  <section
    id="styles"
    class="styles-section section-space"
    aria-labelledby="styles-title"
  >
    <div class="page-width">
      <div class="section-heading">
        <div>
          <p class="section-kicker">{{ messages.styles.kicker }}</p>
          <h2 id="styles-title">
            {{ messages.styles.titleLines[0] }}<br />{{
              messages.styles.titleLines[1]
            }}
          </h2>
        </div>
        <p>
          <template
            v-for="(line, index) in messages.styles.blurb.split('\n')"
            :key="index"
            ><br v-if="index > 0" />{{ line }}</template
          >
        </p>
      </div>
      <div class="gallery-toolbar">
        <div
          class="filter-group"
          role="group"
          :aria-label="messages.styles.filterAria"
        >
          <motion.button
            v-for="item in filters"
            :key="item.id"
            type="button"
            class="filter-button"
            :class="{ 'is-active': filter === item.id }"
            :aria-pressed="filter === item.id"
            :while-press="pressScale"
            :transition="transition"
            @click="filter = item.id"
          >
            {{ item.label }}
            <span v-if="item.id === 'all'">{{ watermarkStyles.length }}</span>
          </motion.button>
        </div>
        <span class="gallery-hint"
          >{{ messages.styles.hint }} <span aria-hidden="true">↗</span></span
        >
      </div>
      <div class="style-gallery">
        <AnimatePresence :initial="false" mode="popLayout">
          <motion.a
            v-for="style in visibleStyles"
            :key="style.id"
            :layout="!reducedMotion"
            class="style-item"
            :data-catalog-index="watermarkStyles.indexOf(style) + 1"
            :href="asset(style.file)"
            :initial="{ opacity: 0, scale: reducedMotion ? 1 : 0.97 }"
            :animate="'rest'"
            :variants="{ rest: { opacity: 1, scale: 1 }, hovered: {} }"
            :exit="{ opacity: 0, scale: reducedMotion ? 1 : 0.97 }"
            :while-hover="reducedMotion ? 'rest' : 'hovered'"
            :transition="transition"
            @click="openPreview($event, style)"
          >
            <div class="style-image">
              <motion.img
                :variants="{
                  rest: { scale: 1, rotate: 0 },
                  hovered: { scale: 1.055, rotate: -2 },
                }"
                :transition="{
                  ...transition,
                  duration: reducedMotion ? 0 : 0.6,
                }"
                :src="asset(style.file)"
                :width="style.width"
                :height="style.height"
                loading="lazy"
                :alt="messages.styles.items[style.id].alt"
              /><span class="image-open" aria-hidden="true">↗</span>
            </div>
            <div class="style-caption">
              <h3>{{ messages.styles.items[style.id].name }}</h3>
              <span :class="{ 'pro-label': style.tier === 'pro' }">{{
                style.tier === "pro"
                  ? messages.styles.tierPro
                  : messages.styles.tierBasic
              }}</span>
            </div>
            <p>{{ messages.styles.items[style.id].tagline }}</p>
          </motion.a>
        </AnimatePresence>
      </div>
      <p class="gallery-count" role="status" aria-live="polite">
        {{ statusText }}
      </p>
    </div>
    <dialog
      id="gallery-dialog"
      ref="dialog"
      class="gallery-dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      @cancel.prevent="closePreview"
      @close="onDialogClosed"
      @click="onBackdropClick"
    >
      <button
        class="dialog-close"
        type="button"
        :aria-label="messages.styles.closeAria"
        @click="closePreview"
      >
        <svg
          class="icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
      <div v-if="selectedStyle" ref="dialogContent" class="dialog-content">
        <div class="dialog-image-wrap">
          <img
            id="dialog-image"
            :src="asset(selectedStyle.file)"
            :alt="messages.styles.items[selectedStyle.id].alt"
          />
        </div>
        <div class="dialog-caption">
          <div>
            <h2 id="dialog-title">
              {{ messages.styles.items[selectedStyle.id].name }}
            </h2>
            <p id="dialog-description">
              {{ messages.styles.items[selectedStyle.id].description }}
            </p>
          </div>
          <span>{{
            selectedStyle.tier === "pro"
              ? messages.styles.dialogPro
              : messages.styles.dialogBasic
          }}</span>
        </div>
      </div>
    </dialog>
  </section>
</template>
