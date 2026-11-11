<script setup lang="ts">
import MotionTextLink from "../components/MotionTextLink.vue";
import MotionRouterLink from "../components/MotionRouterLink.vue";
import HeroSection from "../components/HeroSection.vue";
import StyleGallery from "../components/StyleGallery.vue";
import WatermarkPlayground from "../components/WatermarkPlayground.vue";
import FeatureDetails from "../components/FeatureDetails.vue";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions.vue";
import { asset } from "../lib/assets.js";
import { useSiteMotion } from "../composables/useSiteMotion.js";
const { hoverLift, pressScale, transition } = useSiteMotion();
</script>

<template>
  <main id="main">
    <HeroSection />
    <StyleGallery />
    <WatermarkPlayground />
    <FeatureDetails />
    <section
      class="privacy-banner page-width"
      aria-labelledby="privacy-heading"
    >
      <div class="privacy-emblem" aria-hidden="true">
        <svg class="icon"><use href="#icon-lock" /></svg><span></span
        ><span></span>
      </div>
      <div>
        <p class="section-kicker">好好创作，也好好保护</p>
        <h2 id="privacy-heading">照片属于你，<br />也留在你的设备里。</h2>
        <p>
          水印合成和照片精修在本机完成，照片不会由本应用上传。<br />照片访问、EXIF
          读取，由你决定。
        </p>
        <MotionTextLink to="/privacy" arrow="right"
          >了解我们如何处理数据</MotionTextLink
        >
      </div>
    </section>
    <FrequentlyAskedQuestions />
    <section class="closing page-width" aria-labelledby="closing-title">
      <div class="closing-mark" aria-hidden="true">
        <img :src="asset('icon.png')" width="72" height="72" alt="" />
      </div>
      <p>下一张照片，留点不一样。</p>
      <h2 id="closing-title">让瞬间，有你的落款。</h2>
      <MotionRouterLink
        class="button button-purple"
        :to="{ name: 'home', hash: '#playground' }"
        :while-hover="hoverLift"
        :while-press="pressScale"
        :transition="transition"
        >开始一场小小的创作
        <svg class="icon" aria-hidden="true">
          <use href="#icon-arrow" /></svg></MotionRouterLink
      ><span class="closing-note">水印大师 · 为每一张你喜欢的照片</span>
    </section>
  </main>
</template>
