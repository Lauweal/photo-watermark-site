<script setup lang="ts">
import { MotionConfig } from "motion-v";
import { computed } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import IconSymbols from "./components/IconSymbols.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { useI18n } from "./i18n";
const route = useRoute();
const { messages } = useI18n();
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
        page === "privacy"
          ? messages.common.skipToPolicy
          : messages.common.skipToMain
      }}</RouterLink
    >
    <SiteHeader :page="page" />
    <RouterView />
    <SiteFooter :page="page" />
  </MotionConfig>
</template>
