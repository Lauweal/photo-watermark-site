<script setup lang="ts">
import { RouterLink } from "vue-router";
import MotionRouterLink from "./MotionRouterLink.vue";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";
withDefaults(defineProps<{ page?: "home" | "privacy" }>(), { page: "home" });
const { hoverLift, pressScale, transition } = useSiteMotion();
</script>

<template>
  <header class="site-header" :class="{ 'legal-header': page === 'privacy' }">
    <RouterLink class="brand" to="/" aria-label="水印大师首页"
      ><img :src="asset('icon.png')" width="36" height="36" alt="" /><span
        >水印大师</span
      ></RouterLink
    >
    <template v-if="page === 'home'">
      <nav class="desktop-nav" aria-label="主导航">
        <RouterLink :to="{ name: 'home', hash: '#styles' }">水印美学</RouterLink
        ><RouterLink :to="{ name: 'home', hash: '#details' }"
          >创作细节</RouterLink
        ><RouterLink to="/privacy">隐私政策</RouterLink>
      </nav>
      <MotionRouterLink
        class="button button-small button-dark"
        :to="{ name: 'home', hash: '#playground' }"
        :while-hover="hoverLift"
        :while-press="pressScale"
        :transition="transition"
        >体验水印
        <svg class="icon" aria-hidden="true"><use href="#icon-arrow" /></svg
      ></MotionRouterLink>
    </template>
    <RouterLink v-else class="back-link" to="/"
      ><span aria-hidden="true">←</span> 返回产品首页</RouterLink
    >
  </header>
</template>
