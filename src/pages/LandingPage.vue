<script setup lang="ts">
import MotionTextLink from "../components/MotionTextLink.vue";
import MotionRouterLink from "../components/MotionRouterLink.vue";
import HeroSection from "../components/HeroSection.vue";
import StyleGallery from "../components/StyleGallery.vue";
import WatermarkPlayground from "../components/WatermarkPlayground.vue";
import WorkflowStrip from "../components/WorkflowStrip.vue";
import FeatureDetails from "../components/FeatureDetails.vue";
import CapabilityGrid from "../components/CapabilityGrid.vue";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions.vue";
import { asset } from "../lib/assets.js";
import { useSiteMotion } from "../composables/useSiteMotion.js";
import { useI18n } from "../i18n";
const { messages } = useI18n();
const { hoverLift, pressScale, transition } = useSiteMotion();
</script>

<template>
  <main id="main">
    <HeroSection />
    <StyleGallery />
    <WatermarkPlayground />
    <WorkflowStrip />
    <FeatureDetails />
    <CapabilityGrid />
    <section
      class="privacy-banner page-width"
      aria-labelledby="privacy-heading"
    >
      <div class="privacy-emblem" aria-hidden="true">
        <svg class="icon"><use href="#icon-lock" /></svg><span></span
        ><span></span>
      </div>
      <div>
        <p class="section-kicker">{{ messages.privacyBanner.kicker }}</p>
        <h2 id="privacy-heading">
          {{ messages.privacyBanner.titleLines[0] }}<br />{{
            messages.privacyBanner.titleLines[1]
          }}
        </h2>
        <p>
          <template
            v-for="(line, index) in messages.privacyBanner.body.split('\n')"
            :key="index"
            ><br v-if="index > 0" />{{ line }}</template
          >
        </p>
        <MotionTextLink to="/privacy" arrow="right">{{
          messages.privacyBanner.link
        }}</MotionTextLink>
      </div>
    </section>
    <FrequentlyAskedQuestions />
    <section class="closing page-width" aria-labelledby="closing-title">
      <div class="closing-mark" aria-hidden="true">
        <img :src="asset('icon.png')" width="72" height="72" alt="" />
      </div>
      <p>{{ messages.closing.lead }}</p>
      <h2 id="closing-title">{{ messages.closing.title }}</h2>
      <MotionRouterLink
        class="button button-purple"
        :to="{ name: 'home', hash: '#playground' }"
        :while-hover="hoverLift"
        :while-press="pressScale"
        :transition="transition"
        >{{ messages.closing.cta }}
        <svg class="icon" aria-hidden="true">
          <use href="#icon-arrow" /></svg></MotionRouterLink
      ><span class="closing-note">{{ messages.closing.note }}</span>
    </section>
  </main>
</template>
