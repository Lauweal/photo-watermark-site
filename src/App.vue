<script setup lang="ts">
import { MotionConfig } from "motion-v";
import IconSymbols from "./components/IconSymbols.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import LandingPage from "./pages/LandingPage.vue";
</script>

<template>
  <MotionConfig
    reduced-motion="user"
    :transition="{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }"
  >
    <IconSymbols />
    <a class="skip-link" href="#main">跳至主要内容</a>
    <SiteHeader />
    <LandingPage />
    <SiteFooter />
  </MotionConfig>
</template>
