<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { motion, useAnimate } from "motion-v";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";
import { useI18n } from "../i18n";

type Layout = "classic" | "minimal" | "stamp";
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
</script>

<template>
  <section
    id="playground"
    class="playground-section section-space page-width"
    aria-labelledby="playground-title"
  >
    <div class="section-heading">
      <div>
        <p class="section-kicker">{{ messages.playground.kicker }}</p>
        <h2 id="playground-title">
          {{ messages.playground.titleLines[0] }}<br />{{
            messages.playground.titleLines[1]
          }}
        </h2>
      </div>
      <p>
        <template
          v-for="(line, index) in messages.playground.blurb.split('\n')"
          :key="index"
          ><br v-if="index > 0" />{{ line }}</template
        >
      </p>
    </div>
    <div class="playground">
      <div class="demo-stage">
        <span class="stage-label"
          ><span aria-hidden="true"></span> {{ messages.playground.stageLabel
          }}</span
        >
        <div class="stage-grid" aria-hidden="true"></div>
        <motion.figure
          id="demo-print"
          ref="preview"
          class="demo-print"
          :data-layout="state.layout"
          :data-tone="state.tone"
          :initial="false"
          :animate="{ rotate: -3 }"
          :transition="{ ...transition, duration: reducedMotion ? 0 : 0.2 }"
        >
          <div class="photo-crop">
            <img
              :src="asset('classic.jpg')"
              width="1280"
              height="1313"
              loading="lazy"
              :alt="messages.playground.photoAlt"
              :style="{ filter: `saturate(${state.saturation / 100})` }"
            />
          </div>
          <figcaption>
            <span class="demo-brand">{{ messages.playground.demoBrand }}</span
            ><strong id="demo-title">{{
              state.caption.trim() || messages.playground.defaultCaption
            }}</strong
            ><span class="demo-location">{{
              messages.playground.location
            }}</span
            ><span class="demo-exif"
              >85mm &nbsp; f/2.5 &nbsp; 1/1667s &nbsp; ISO 100</span
            >
          </figcaption>
        </motion.figure>
        <span class="stage-footnote">{{
          messages.playground.stageFootnote
        }}</span>
      </div>
      <form class="demo-controls" @submit.prevent>
        <div class="controls-heading">
          <svg class="icon" aria-hidden="true">
            <use href="#icon-sliders" />
          </svg>
          <h3>{{ messages.playground.controlsTitle }}</h3>
          <span>{{ messages.playground.controlsBadge }}</span>
        </div>
        <fieldset>
          <legend>{{ messages.playground.layoutLegend }}</legend>
          <div class="layout-options">
            <motion.button
              v-for="layout in layouts"
              :key="layout.id"
              type="button"
              class="layout-option"
              :class="{ 'is-active': state.layout === layout.id }"
              :aria-pressed="state.layout === layout.id"
              :while-press="pressScale"
              :transition="transition"
              @click="state.layout = layout.id"
              ><span
                class="layout-glyph"
                :class="`glyph-${layout.id}`"
                aria-hidden="true"
              ></span
              >{{ layout.label }}</motion.button
            >
          </div>
        </fieldset>
        <div class="input-group">
          <label for="caption-input"
            >{{ messages.playground.captionLabel }}
            <span
              >{{ state.caption.length }} /
              {{ messages.playground.captionLimit }}</span
            ></label
          ><input
            id="caption-input"
            v-model="state.caption"
            name="caption"
            type="text"
            :maxlength="messages.playground.captionLimit"
            autocomplete="off"
            spellcheck="false"
          />
        </div>
        <fieldset class="tone-field">
          <legend>{{ messages.playground.toneLegend }}</legend>
          <div class="tone-options">
            <motion.button
              v-for="tone in tones"
              :key="tone.id"
              type="button"
              class="tone-option"
              :class="{ 'is-active': state.tone === tone.id }"
              :aria-pressed="state.tone === tone.id"
              :while-press="pressScale"
              :transition="transition"
              @click="state.tone = tone.id"
              ><span
                class="swatch"
                :class="`swatch-${tone.id}`"
                aria-hidden="true"
              ></span
              >{{ tone.label }}</motion.button
            >
          </div>
        </fieldset>
        <div class="range-group">
          <label for="saturation"
            >{{ messages.playground.saturationLabel }}
            <output id="saturation-value" for="saturation"
              >{{ state.saturation }}%</output
            ></label
          ><input
            id="saturation"
            v-model.number="state.saturation"
            name="saturation"
            type="range"
            min="0"
            max="160"
            step="1"
            :style="{ '--range-progress': `${state.saturation / 1.6}%` }"
            :aria-valuetext="`${state.saturation}%`"
          />
          <div class="range-endpoints" aria-hidden="true">
            <span>{{ messages.playground.saturationLow }}</span
            ><span>{{ messages.playground.saturationHigh }}</span>
          </div>
        </div>
        <motion.button
          id="reset-demo"
          type="button"
          class="reset-button"
          :while-press="pressScale"
          :transition="transition"
          @click="reset"
          >{{ messages.playground.reset }}
          <span aria-hidden="true">↺</span></motion.button
        >
        <p class="demo-disclaimer">
          {{ messages.playground.disclaimer }}
        </p>
      </form>
    </div>
  </section>
</template>
