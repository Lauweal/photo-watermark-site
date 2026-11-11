<script setup lang="ts">
import { reactive, watch } from "vue";
import { motion, useAnimate } from "motion-v";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";

type Layout = "classic" | "minimal" | "stamp";
type Tone = "light" | "dark";
const initialState = {
  layout: "classic" as Layout,
  tone: "light" as Tone,
  caption: "花开的时候",
  saturation: 100,
};
const state = reactive({ ...initialState });
const [preview, animate] = useAnimate<HTMLElement>();
let previewAnimation: ReturnType<typeof animate> | undefined;
const layouts: { id: Layout; label: string }[] = [
  { id: "classic", label: "经典" },
  { id: "minimal", label: "留白" },
  { id: "stamp", label: "邮票" },
];
const tones: { id: Tone; label: string }[] = [
  { id: "light", label: "纸白" },
  { id: "dark", label: "墨黑" },
];
const { reducedMotion, transition, pressScale } = useSiteMotion();

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
  const appearanceChanges =
    state.layout !== initialState.layout || state.tone !== initialState.tone;
  Object.assign(state, initialState);
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
        <p class="section-kicker">一点细节，很有你的感觉</p>
        <h2 id="playground-title">你的照片。<br />你的表达方式。</h2>
      </div>
      <p>换一种版式，写下一句话。<br />在这里，先感受水印的变化。</p>
    </div>
    <div class="playground">
      <div class="demo-stage">
        <span class="stage-label"
          ><span aria-hidden="true"></span> 实时预览</span
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
              alt="用于体验水印的黄色与紫色花园照片"
              :style="{ filter: `saturate(${state.saturation / 100})` }"
            />
          </div>
          <figcaption>
            <span class="demo-brand">Photo diary</span
            ><strong id="demo-title">{{
              state.caption.trim() || "给时光一个落款"
            }}</strong
            ><span class="demo-location">上海 · 某个晴天</span
            ><span class="demo-exif"
              >85mm &nbsp; f/2.5 &nbsp; 1/1667s &nbsp; ISO 100</span
            >
          </figcaption>
        </motion.figure>
        <span class="stage-footnote">让一张照片，多一点自己的样子。</span>
      </div>
      <form class="demo-controls" @submit.prevent>
        <div class="controls-heading">
          <svg class="icon" aria-hidden="true">
            <use href="#icon-sliders" />
          </svg>
          <h3>水印工作台</h3>
          <span>网页演示</span>
        </div>
        <fieldset>
          <legend>选择一种版式</legend>
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
            >给照片一句话 <span>{{ state.caption.length }} / 18</span></label
          ><input
            id="caption-input"
            v-model="state.caption"
            name="caption"
            type="text"
            maxlength="18"
            autocomplete="off"
            spellcheck="false"
          />
        </div>
        <fieldset class="tone-field">
          <legend>画框色调</legend>
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
            >色彩饱和度
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
            <span>黑白</span><span>鲜明</span>
          </div>
        </div>
        <motion.button
          id="reset-demo"
          type="button"
          class="reset-button"
          :while-press="pressScale"
          :transition="transition"
          @click="reset"
          >恢复初始效果 <span aria-hidden="true">↺</span></motion.button
        >
        <p class="demo-disclaimer">
          此处展示版式与调色交互。完整样式、照片导入和导出，请在 App 内体验。
        </p>
      </form>
    </div>
  </section>
</template>
