<script setup lang="ts">
import { RouterLink } from "vue-router";
import MotionRouterLink from "./MotionRouterLink.vue";
import MotionTextLink from "./MotionTextLink.vue";
import { onBeforeUnmount, watch } from "vue";
import { motion, useSpring } from "motion-v";
import { asset } from "../lib/assets.js";
import { useSiteMotion } from "../composables/useSiteMotion.js";
const { reducedMotion, transition, hoverLift, pressScale } = useSiteMotion();
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
        献给每一次认真按下快门的你
      </div>
      <h1 id="hero-title">
        为照片，<br />留下你的印记<span class="title-period">。</span>
      </h1>
      <p class="hero-description">
        照片记住瞬间，水印留下故事。<br />把拍摄的参数、走过的地方和当时的心情，<br
          class="desktop-break"
        />一起装进画面里。
      </p>
      <div class="hero-actions">
        <MotionRouterLink
          class="button button-purple"
          :to="{ name: 'home', hash: '#playground' }"
          :while-hover="hoverLift"
          :while-press="pressScale"
          :transition="transition"
          >亲手试一试
          <svg class="icon" aria-hidden="true">
            <use href="#icon-arrow" /></svg></MotionRouterLink
        ><MotionTextLink :to="{ name: 'home', hash: '#styles' }"
          >看看水印样式</MotionTextLink
        >
      </div>
      <p class="hero-footnote">
        <svg class="icon" aria-hidden="true"><use href="#icon-lock" /></svg>
        照片本地处理，创作安心一点。
      </p>
    </motion.div>
    <div
      @pointermove="tiltPrint"
      @pointerleave="resetTilt"
      class="hero-art"
      aria-label="水印大师作品展示"
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
        ><span>属于你的影像记忆</span></motion.div
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
            alt="阳光下，黄色和紫色的花朵簇拥成一片花园"
          />
        </div>
        <figcaption>
          <div class="print-topline">
            <span class="print-title">花开的时候</span
            ><svg class="icon" aria-hidden="true">
              <use href="#icon-spark" />
            </svg>
          </div>
          <span class="print-story">把这一刻，留在光里。</span
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
          ><small>照片里的小细节</small
          ><strong>每一帧，都有来处。</strong></span
        ></motion.div
      >
      <motion.span
        class="art-signature"
        :initial="reducedMotion ? false : { opacity: 0, y: 12, rotate: -5 }"
        :animate="{ opacity: 1, y: 0, rotate: -5 }"
        :transition="{ ...transition, delay: reducedMotion ? 0 : 0.6 }"
        >好照片，值得一个落款。</motion.span
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
        ><span>留住<br />此刻</span></motion.div
      >
    </div>
    <div class="hero-bottom">
      <span>用你喜欢的方式，<br /><strong>重新认识一张照片。</strong></span>
      <div>
        <span>水印样式</span><span>拍摄信息</span><span>照片精修</span
        ><span>本地导出</span>
      </div>
      <RouterLink
        :to="{ name: 'home', hash: '#styles' }"
        aria-label="向下探索水印样式"
        ><span aria-hidden="true">↓</span></RouterLink
      >
    </div>
  </section>
</template>
