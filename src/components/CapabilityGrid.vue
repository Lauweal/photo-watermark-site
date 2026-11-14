<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { motion } from "motion-v";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";
import { useI18n } from "../i18n";

const { messages } = useI18n();
const { reducedMotion, transition } = useSiteMotion();

const tiles = computed(() => messages.value.capabilities.tiles);

/** Representative maker marks already bundled with the photo editor. */
const cameraBrands = [
  { id: "apple", shape: "symbol" },
  { id: "canon", shape: "wordmark" },
  { id: "nikon", shape: "symbol" },
  { id: "sony", shape: "wordmark" },
  { id: "leica", shape: "symbol" },
  { id: "hasselblad", shape: "wordmark" },
  { id: "dji", shape: "symbol" },
  { id: "fujifilm", shape: "wordmark" },
  { id: "huawei", shape: "symbol" },
  { id: "xiaomi", shape: "symbol" },
  { id: "samsung", shape: "wordmark" },
  { id: "panasonic", shape: "wordmark" },
] as const;

/** Typeface specimens drawn from stacks every browser already carries. */
const typeSpecimens = [
  { id: "display", stack: "Pliant, serif" },
  { id: "serif", stack: 'Georgia, "Times New Roman", serif' },
  { id: "mono", stack: '"Courier New", ui-monospace, monospace' },
];

/** Scripts the app is already localized into. */
const scriptMarks = ["中文", "繁體", "日本語", "한국어", "English"];

/** Thumbnails used to suggest editing a batch of photos at once. */
const batchPhotos = [
  "classic.jpg",
  "postage-stamp.jpg",
  "minimal-camera.jpg",
];

type TileId =
  | "logos"
  | "typography"
  | "invert"
  | "batch"
  | "export"
  | "languages";

const capabilityOrder: TileId[] = [
  "logos",
  "typography",
  "invert",
  "batch",
  "export",
  "languages",
];

const tileIcons: Record<TileId, string> = {
  logos: "icon-camera",
  typography: "icon-type",
  invert: "icon-invert",
  batch: "icon-stack",
  export: "icon-download",
  languages: "icon-globe",
};

const stats = computed(() => messages.value.capabilities.stats);
const targets = computed(() =>
  stats.value.map((stat) => Number.parseInt(stat.value, 10) || 0),
);
const shown = ref<number[]>(
  reducedMotion.value ? [] : targets.value.map(() => 0),
);
const statsEl = ref<HTMLElement | null>(null);
let frame = 0;
let counted = false;

function settle() {
  shown.value = targets.value.slice();
}

function countUp() {
  if (counted) return;
  counted = true;
  if (reducedMotion.value) {
    settle();
    return;
  }
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / 900, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    shown.value = targets.value.map((target) => Math.round(target * eased));
    if (progress < 1) frame = requestAnimationFrame(tick);
    else settle();
  };
  frame = requestAnimationFrame(tick);
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (reducedMotion.value || typeof IntersectionObserver === "undefined") {
    countUp();
    return;
  }
  const element = statsEl.value;
  if (!element) {
    countUp();
    return;
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer?.disconnect();
      observer = null;
      countUp();
    },
    { threshold: 0.4 },
  );
  observer.observe(element);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  cancelAnimationFrame(frame);
});

watch(targets, () => {
  if (counted) settle();
});
</script>

<template>
  <section
    id="capabilities"
    class="capability-section"
    aria-labelledby="capability-title"
  >
    <div class="page-width">
      <div class="section-heading">
        <div>
          <p class="section-kicker">{{ messages.capabilities.kicker }}</p>
          <h2 id="capability-title">{{ messages.capabilities.title }}</h2>
        </div>
        <p>
          <template
            v-for="(line, index) in messages.capabilities.blurb.split('\n')"
            :key="index"
            ><br v-if="index > 0" />{{ line }}</template
          >
        </p>
      </div>
      <div class="capability-grid">
        <motion.article
          v-for="(id, index) in capabilityOrder"
          :key="id"
          class="capability-tile"
          :class="`tile-${id}`"
          :initial="{ opacity: 0, y: reducedMotion ? 0 : 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true, amount: 0.3 }"
          :transition="{
            ...transition,
            delay: reducedMotion ? 0 : index * 0.06,
          }"
        >
          <div class="tile-head">
            <span class="tile-icon">
              <svg class="icon">
                <use :href="`#${tileIcons[id]}`" />
              </svg>
            </span>
            <p class="tile-meta">{{ tiles[id].meta }}</p>
          </div>
          <h3>{{ tiles[id].title }}</h3>
          <p class="tile-body">{{ tiles[id].body }}</p>

          <ul v-if="id === 'logos'" class="brand-marks" aria-hidden="true">
            <li
              v-for="brand in cameraBrands"
              :key="brand.id"
              class="brand-mark"
              :class="`brand-mark--${brand.shape}`"
            >
              <img
                :src="asset(`vendor-logos/${brand.id}.png`)"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </li>
          </ul>

          <div v-else-if="id === 'typography'" class="type-specimens" aria-hidden="true">
            <span
              v-for="specimen in typeSpecimens"
              :key="specimen.id"
              :style="{ fontFamily: specimen.stack }"
              >Aa</span
            >
          </div>

          <div v-else-if="id === 'invert'" class="invert-swatches" aria-hidden="true">
            <span class="invert-swatch is-paper">Aa</span>
            <span class="invert-swatch is-ink">Aa</span>
          </div>

          <div v-else-if="id === 'batch'" class="batch-stack" aria-hidden="true">
            <img
              v-for="file in batchPhotos"
              :key="file"
              :src="asset(file)"
              width="1280"
              height="1313"
              loading="lazy"
              alt=""
            />
          </div>

          <div v-else-if="id === 'export'" class="export-readout" aria-hidden="true">
            <span class="export-value">2048<small>px</small></span>
            <span class="export-format">JPEG</span>
          </div>

          <ul v-else class="script-marks" aria-hidden="true">
            <li v-for="mark in scriptMarks" :key="mark">{{ mark }}</li>
          </ul>
        </motion.article>
      </div>
      <ul
        ref="statsEl"
        class="capability-stats"
        :aria-label="messages.capabilities.statsAria"
      >
        <li v-for="(stat, index) in stats" :key="index" class="capability-stat">
          <strong>{{ shown[index] ?? stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
