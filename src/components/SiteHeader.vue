<script setup lang="ts">
import { RouterLink } from "vue-router";
import MotionRouterLink from "./MotionRouterLink.vue";
import LocaleSwitcher from "./LocaleSwitcher.vue";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";
import { useI18n } from "../i18n";
withDefaults(defineProps<{ page?: "home" | "privacy" }>(), { page: "home" });
const { messages } = useI18n();
const { hoverLift, pressScale, transition } = useSiteMotion();
</script>

<template>
  <header class="site-header" :class="{ 'legal-header': page === 'privacy' }">
    <RouterLink class="brand" to="/" :aria-label="messages.header.brandAria"
      ><img :src="asset('icon.png')" width="36" height="36" alt="" /><span>{{
        messages.brand
      }}</span></RouterLink
    >
    <template v-if="page === 'home'">
      <nav class="desktop-nav" :aria-label="messages.header.navAria">
        <RouterLink :to="{ name: 'home', hash: '#styles' }">{{
          messages.header.navStyles
        }}</RouterLink
        ><RouterLink :to="{ name: 'home', hash: '#details' }">{{
          messages.header.navDetails
        }}</RouterLink
        ><RouterLink to="/privacy">{{ messages.header.navPrivacy }}</RouterLink>
      </nav>
      <div class="header-actions">
        <LocaleSwitcher />
        <MotionRouterLink
          class="button button-small button-dark"
          :to="{ name: 'home', hash: '#playground' }"
          :while-hover="hoverLift"
          :while-press="pressScale"
          :transition="transition"
          >{{ messages.header.cta }}
          <svg class="icon" aria-hidden="true"><use href="#icon-arrow" /></svg
        ></MotionRouterLink>
      </div>
    </template>
    <div v-else class="header-actions">
      <LocaleSwitcher />
      <RouterLink class="back-link" to="/"
        ><span aria-hidden="true">←</span>
        {{ messages.header.backToHome }}</RouterLink
      >
    </div>
  </header>
</template>
