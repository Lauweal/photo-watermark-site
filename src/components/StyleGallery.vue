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

type Filter = "all" | StyleTier;
const filter = ref<Filter>("all");
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "全部样式" },
  { id: "basic", label: "基础样式" },
  { id: "pro", label: "Pro 样式" },
];
const visibleStyles = computed(() =>
  watermarkStyles.filter(
    (style) => filter.value === "all" || style.tier === filter.value,
  ),
);
const filterLabel = computed(() =>
  filter.value === "all" ? "全部" : filter.value === "basic" ? "基础" : "Pro",
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
          <p class="section-kicker">水印，是照片的另一种表达</p>
          <h2 id="styles-title">同一个瞬间，<br />不止一种模样。</h2>
        </div>
        <p>
          克制的留白，完整的拍摄参数，<br />或一张寄给自己的旅行邮票。<br />找到适合这张照片的那一个。
        </p>
      </div>
      <div class="gallery-toolbar">
        <div class="filter-group" role="group" aria-label="按套餐筛选水印">
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
          >点开照片，看看细节 <span aria-hidden="true">↗</span></span
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
                :alt="style.alt"
              /><span class="image-open" aria-hidden="true">↗</span>
            </div>
            <div class="style-caption">
              <h3>{{ style.name }}</h3>
              <span :class="{ 'pro-label': style.tier === 'pro' }">{{
                style.tier === "pro" ? "Pro" : "基础"
              }}</span>
            </div>
            <p>{{ style.tagline }}</p>
          </motion.a>
        </AnimatePresence>
      </div>
      <p class="gallery-count" role="status" aria-live="polite">
        正在展示{{ filterLabel }} {{ visibleStyles.length }} 款水印样式
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
      <div v-if="selectedStyle" ref="dialogContent" class="dialog-content">
        <motion.button
          class="dialog-close"
          type="button"
          aria-label="关闭水印预览"
          :while-press="pressScale"
          :transition="transition"
          @click="closePreview"
          >×</motion.button
        >
        <div class="dialog-image-wrap">
          <img
            id="dialog-image"
            :src="asset(selectedStyle.file)"
            :alt="selectedStyle.alt"
          />
        </div>
        <div class="dialog-caption">
          <div>
            <h2 id="dialog-title">{{ selectedStyle.name }}</h2>
            <p id="dialog-description">{{ selectedStyle.description }}</p>
          </div>
          <span>{{
            selectedStyle.tier === "pro" ? "Pro 样式" : "基础样式"
          }}</span>
        </div>
      </div>
    </dialog>
  </section>
</template>
