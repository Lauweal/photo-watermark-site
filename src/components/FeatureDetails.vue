<script setup lang="ts">
import { computed, ref } from "vue";
import { AnimatePresence, motion } from "motion-v";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";
import { useI18n } from "../i18n";

const { messages } = useI18n();
const { reducedMotion, transition } = useSiteMotion();

/** Illustrative shooting data. Values are locale-neutral on purpose. */
const exifFields = computed(() => [
  {
    key: "focal",
    label: messages.value.details.exifFocal,
    value: "85",
    unit: "mm",
  },
  { key: "aperture", label: messages.value.details.exifAperture, value: "f/2.5" },
  { key: "shutter", label: messages.value.details.exifShutter, value: "1/320", unit: "s" },
  { key: "iso", label: messages.value.details.exifIso, value: "ISO 100" },
  { key: "date", label: messages.value.details.exifDate, value: "2026-05-18" },
  {
    key: "location",
    label: messages.value.details.exifLocation,
    value: "31.23° N",
  },
]);

const groups = computed(() => messages.value.details.retouchGroups);
const activeGroup = ref(0);
const activeIndex = computed(() =>
  Math.min(activeGroup.value, groups.value.length - 1),
);
const activeParams = computed(() => groups.value[activeIndex.value]?.params ?? []);

/** A subtle preview filter per tool group, so tapping one changes the photo. */
const groupFilters = [
  "brightness(1.08) contrast(1.04)",
  "contrast(1.22)",
  "saturate(1.45)",
  "sepia(.2) hue-rotate(-8deg)",
  "hue-rotate(10deg) saturate(1.14)",
  "saturate(1.3) hue-rotate(-16deg)",
  "contrast(1.16) brightness(1.02)",
  "blur(.7px) contrast(.97)",
  "contrast(1.06) brightness(.94)",
  "brightness(1.06) saturate(1.12)",
  "saturate(1.04) contrast(1.02)",
];
const photoFilter = computed(
  () => `saturate(.85) ${groupFilters[activeIndex.value] ?? ""}`,
);
</script>

<template>
  <section
    class="details-section section-space page-width"
    id="details"
    aria-labelledby="details-title"
  >
    <div class="section-heading">
      <div>
        <p class="section-kicker">{{ messages.details.kicker }}</p>
        <h2 id="details-title">{{ messages.details.title }}</h2>
      </div>
      <p>
        <template
          v-for="(line, index) in messages.details.blurb.split('\n')"
          :key="index"
          ><br v-if="index > 0" />{{ line }}</template
        >
      </p>
    </div>
    <div class="detail-grid">
      <article class="detail-exif">
        <div class="detail-visual exif-visual" aria-hidden="true">
          <div class="exif-panel">
            <p class="exif-panel-title">
              <svg class="icon"><use href="#icon-camera" /></svg>
              {{ messages.details.exifConfirm }}
            </p>
            <dl class="exif-fields">
              <div v-for="field in exifFields" :key="field.key" class="exif-field">
                <dt>{{ field.label }}</dt>
                <dd>
                  {{ field.value
                  }}<small v-if="field.unit">{{ field.unit }}</small>
                </dd>
              </div>
            </dl>
            <span class="exif-auto">
              <svg class="icon"><use href="#icon-check" /></svg>
              {{ messages.details.exifAuto }}
            </span>
          </div>
        </div>
        <div class="detail-copy">
          <h3>{{ messages.details.exifTitle }}</h3>
          <p>{{ messages.details.exifBody }}</p>
          <span>{{ messages.details.exifNote }}</span>
        </div>
      </article>
      <article class="detail-retouch">
        <div class="detail-visual retouch-visual">
          <div class="retouch-photo photo-crop" aria-hidden="true">
            <img
              :src="asset('classic.jpg')"
              width="1280"
              height="1313"
              loading="lazy"
              alt=""
              :style="{ filter: photoFilter }"
            />
          </div>
          <div class="retouch-tools">
            <div
              class="retouch-groups"
              role="group"
              :aria-label="messages.details.retouchBadge"
            >
              <button
                v-for="(group, index) in groups"
                :key="group.name"
                type="button"
                class="retouch-group"
                :class="{ 'is-active': index === activeIndex }"
                :aria-pressed="index === activeIndex"
                @click="activeGroup = index"
              >
                {{ group.name }}
              </button>
            </div>
            <ul class="retouch-params" :aria-label="groups[activeIndex]?.name">
              <AnimatePresence :initial="false">
                <motion.li
                  v-for="param in activeParams"
                  :key="`${activeIndex}-${param}`"
                  class="retouch-param"
                  :initial="{ opacity: 0, y: reducedMotion ? 0 : 6 }"
                  :animate="{ opacity: 1, y: 0 }"
                  :exit="{ opacity: 0, y: reducedMotion ? 0 : -6 }"
                  :transition="transition"
                >
                  {{ param }}
                </motion.li>
              </AnimatePresence>
            </ul>
            <p class="retouch-hint">{{ messages.details.retouchHint }}</p>
          </div>
        </div>
        <div class="detail-copy">
          <h3>{{ messages.details.retouchTitle }}</h3>
          <p>{{ messages.details.retouchBody }}</p>
          <span class="detail-pro">{{ messages.details.retouchBadge }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
