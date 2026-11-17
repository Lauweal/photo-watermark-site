<script setup lang="ts">
import { useI18n } from "../../../i18n";
import { asset } from "../../../lib/assets";
import { motion, AnimatePresence } from "motion-v";
import { useStyleGallery } from "../composables/useStyleGallery";
import { watermarkStyles } from "../model/watermarkStyles";
const { messages } = useI18n();
const {
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
} = useStyleGallery();
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
                  hovered: { scale: 1.025, rotate: 0 },
                }"
                :transition="{
                  ...transition,
                  duration: reducedMotion ? 0 : 0.36,
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
      :ref="setDialogElement"
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
      <div
        v-if="selectedStyle"
        :ref="setDialogContentElement"
        class="dialog-content"
      >
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
