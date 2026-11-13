<script setup lang="ts">
import { RouterLink } from "vue-router";
import MotionRouterLink from "./MotionRouterLink.vue";
import MotionTextLink from "./MotionTextLink.vue";
import { computed, onBeforeUnmount, watch } from "vue";
import { motion, useSpring } from "motion-v";
import { asset } from "../lib/assets.js";
import { useSiteMotion } from "../composables/useSiteMotion.js";
import { useI18n } from "../i18n";
const { messages } = useI18n();
const { reducedMotion, transition, hoverLift, pressScale } = useSiteMotion();
const descriptionLines = computed(() =>
  messages.value.hero.description.split("\n"),
);
const rotateX = useSpring(0, { stiffness: 180, damping: 24 });
const rotateY = useSpring(0, { stiffness: 180, damping: 24 });

function tiltPrint(event: PointerEvent) {
  if (reducedMotion.value || event.pointerType !== "mouse") return;
  const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect();
  rotateX.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 5);
  rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
}
function resetTilt() {
  if (reducedMotion.value) {
    rotateX.jump(0);
    rotateY.jump(0);
  } else {
    rotateX.set(0);
    rotateY.set(0);
  }
}
watch(reducedMotion, resetTilt);
onBeforeUnmount(() => {
  rotateX.stop();
  rotateY.stop();
});
</script>

<template>
  <section class="hero page-width" aria-labelledby="hero-title">
    <motion.div
      class="hero-copy"
      :initial="reducedMotion ? false : { opacity: 0, y: 15 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ ...transition, duration: reducedMotion ? 0 : 0.9 }"
    >
      <div class="intro-note">
        <span class="tiny-aperture" aria-hidden="true"></span>
        {{ messages.hero.introNote }}
      </div>
      <h1 id="hero-title">
        {{ messages.hero.titleLines[0] }}<br />{{ messages.hero.titleLines[1]
        }}<span class="title-period">{{ messages.hero.titleMark }}</span>
      </h1>
      <p class="hero-description">
        <template v-for="(line, index) in descriptionLines" :key="index"
          ><br v-if="index > 0" />{{ line }}</template
        >
      </p>
      <div class="hero-actions">
        <MotionRouterLink
          class="button button-purple"
          :to="{ name: 'home', hash: '#playground' }"
          :while-hover="hoverLift"
          :while-press="pressScale"
          :transition="transition"
          >{{ messages.hero.primaryCta }}
          <svg class="icon" aria-hidden="true">
            <use href="#icon-arrow" /></svg></MotionRouterLink
        ><MotionTextLink :to="{ name: 'home', hash: '#styles' }">{{
          messages.hero.secondaryCta
        }}</MotionTextLink>
      </div>
      <p class="hero-footnote">
        <svg class="icon" aria-hidden="true"><use href="#icon-lock" /></svg>
        {{ messages.hero.footnote }}
      </p>
    </motion.div>
    <div
      @pointermove="tiltPrint"
      @pointerleave="resetTilt"
      class="hero-art"
      :aria-label="messages.hero.artAria"
    >
      <div class="orbit orbit-one" aria-hidden="true"></div>
      <div class="orbit orbit-two" aria-hidden="true"></div>
      <span class="art-coordinate" aria-hidden="true"
        >A moment, made yours.</span
      >
      <motion.div
        class="hero-photo-back back-lilac"
        aria-hidden="true"
        :initial="
          reducedMotion ? false : { opacity: 0, x: -10, y: 20, rotate: -3 }
        "
        :animate="{ opacity: 1, x: 0, y: 0, rotate: 8 }"
        :transition="{
          ...transition,
          duration: reducedMotion ? 0 : 0.9,
          delay: reducedMotion ? 0 : 0.1,
        }"
        ><span>{{ messages.hero.backCaption }}</span></motion.div
      >
      <motion.div
        class="hero-photo-back back-stamp"
        aria-hidden="true"
        :initial="
          reducedMotion ? false : { opacity: 0, x: -80, y: 20, rotate: -3 }
        "
        :animate="{ opacity: 1, x: 0, y: 0, rotate: 14 }"
        :transition="{
          ...transition,
          duration: reducedMotion ? 0 : 0.9,
          delay: reducedMotion ? 0 : 0.15,
        }"
        ><img
          :src="asset('airmail-stamp.jpg')"
          width="1280"
          height="1871"
          alt=""
      /></motion.div>
      <motion.figure
        class="hero-print"
        :style="{ rotateX, rotateY }"
        :initial="
          reducedMotion ? false : { opacity: 0, y: 35, rotate: -1, scale: 0.96 }
        "
        :animate="{ opacity: 1, y: 0, rotate: -7, scale: 1 }"
        :transition="{ ...transition, duration: reducedMotion ? 0 : 1.1 }"
      >
        <div class="photo-crop">
          <img
            :src="asset('classic.jpg')"
            width="1280"
            height="1313"
            fetchpriority="high"
            :alt="messages.hero.photoAlt"
          />
        </div>
        <figcaption>
          <div class="print-topline">
            <span class="print-title">{{ messages.hero.printTitle }}</span
            ><svg class="icon" aria-hidden="true">
              <use href="#icon-spark" />
            </svg>
          </div>
          <span class="print-story">{{ messages.hero.printStory }}</span
          ><span class="print-exif"
            >85mm &nbsp; f/2.5 &nbsp; 1/1667s &nbsp; ISO 100</span
          >
        </figcaption>
      </motion.figure>
      <motion.div
        class="floating-tag tag-exif"
        :initial="
          reducedMotion ? false : { opacity: 0, x: 0, y: 20, rotate: -3 }
        "
        :animate="{ opacity: 1, x: 0, y: 0, rotate: -3 }"
        :transition="{
          ...transition,
          duration: reducedMotion ? 0 : 0.9,
          delay: reducedMotion ? 0 : 0.65,
        }"
        ><span class="tag-icon"
          ><svg class="icon" aria-hidden="true">
            <use href="#icon-camera" /></svg></span
        ><span
          ><small>{{ messages.hero.tagSmall }}</small
          ><strong>{{ messages.hero.tagStrong }}</strong></span
        ></motion.div
      >
      <motion.span
        class="art-signature"
        :initial="reducedMotion ? false : { opacity: 0, y: 12, rotate: -5 }"
        :animate="{ opacity: 1, y: 0, rotate: -5 }"
        :transition="{ ...transition, delay: reducedMotion ? 0 : 0.6 }"
        >{{ messages.hero.signature }}</motion.span
      >
      <motion.div
        class="art-stamp"
        aria-hidden="true"
        :initial="
          reducedMotion ? false : { opacity: 0, x: 0, y: 20, rotate: -3 }
        "
        :animate="{ opacity: 1, x: 0, y: 0, rotate: 12 }"
        :transition="{
          ...transition,
          duration: reducedMotion ? 0 : 0.9,
          delay: reducedMotion ? 0 : 0.6,
        }"
        ><svg class="icon"><use href="#icon-spark" /></svg
        ><span
          >{{ messages.hero.stampLines[0] }}<br />{{
            messages.hero.stampLines[1]
          }}</span
        ></motion.div
      >
    </div>
    <div class="hero-bottom">
      <span
        >{{ messages.hero.bottomLead }}<br /><strong>{{
          messages.hero.bottomLeadStrong
        }}</strong></span
      >
      <div>
        <span v-for="chip in messages.hero.chips" :key="chip">{{ chip }}</span>
      </div>
      <RouterLink
        :to="{ name: 'home', hash: '#styles' }"
        :aria-label="messages.common.exploreStyles"
        ><span aria-hidden="true">↓</span></RouterLink
      >
    </div>
  </section>
</template>
