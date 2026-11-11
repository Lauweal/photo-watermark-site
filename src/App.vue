<script setup lang="ts">
import { MotionConfig } from "motion-v";
import { computed } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import IconSymbols from "./components/IconSymbols.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
const route = useRoute();
const page = computed(() => (route.name === "privacy" ? "privacy" : "home"));
</script>

<template>
  <MotionConfig
    reduced-motion="user"
    :transition="{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }"
  >
    <IconSymbols />
    <RouterLink
      class="skip-link"
      :to="{ name: page, hash: page === 'privacy' ? '#policy' : '#main' }"
      >{{
        page === "privacy" ? "跳至隐私政策正文" : "跳至主要内容"
      }}</RouterLink
    >
    <SiteHeader :page="page" />
    <RouterView />
    <SiteFooter :page="page" />
  </MotionConfig>
</template>
