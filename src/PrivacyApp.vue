<script setup lang="ts">
import { MotionConfig } from "motion-v";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import PrivacyPage from "./pages/PrivacyPage.vue";
</script>

<template>
  <MotionConfig reduced-motion="user" :transition="{ duration: 0.32 }">
    <a class="skip-link" href="#policy">跳至隐私政策正文</a>
    <SiteHeader page="privacy" />
    <PrivacyPage />
    <SiteFooter page="privacy" />
  </MotionConfig>
</template>
