<script setup lang="ts">
import { motion } from "motion-v";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";
withDefaults(defineProps<{ page?: "home" | "privacy" }>(), { page: "home" });
const { hoverLift, pressScale, transition } = useSiteMotion();
</script>

<template>
  <header class="site-header" :class="{ 'legal-header': page === 'privacy' }">
    <a class="brand" href="index.html" aria-label="水印大师首页"
      ><img :src="asset('icon.png')" width="36" height="36" alt="" /><span
        >水印大师</span
      ></a
    >
    <template v-if="page === 'home'">
      <nav class="desktop-nav" aria-label="主导航">
        <a href="#styles">水印美学</a><a href="#details">创作细节</a
        ><a href="privacy.html">隐私政策</a>
      </nav>
      <motion.a
        class="button button-small button-dark"
        href="#playground"
        :while-hover="hoverLift"
        :while-press="pressScale"
        :transition="transition"
        >体验水印
        <svg class="icon" aria-hidden="true"><use href="#icon-arrow" /></svg
      ></motion.a>
    </template>
    <a v-else class="back-link" href="index.html"
      ><span aria-hidden="true">←</span> 返回产品首页</a
    >
  </header>
</template>
