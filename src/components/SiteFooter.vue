<script setup lang="ts">
import { asset } from "../lib/assets";
import { RouterLink } from "vue-router";
withDefaults(defineProps<{ page?: "home" | "privacy" }>(), { page: "home" });
</script>

<template>
  <footer class="site-footer page-width">
    <RouterLink class="brand" to="/"
      ><img :src="asset('icon.png')" width="30" height="30" alt="" /><span
        >水印大师</span
      ></RouterLink
    >
    <p>留住瞬间，也留下故事。</p>
    <nav aria-label="页脚导航">
      <RouterLink :to="page === 'privacy' ? '/' : '/privacy'">{{
        page === "privacy" ? "产品首页" : "隐私政策"
      }}</RouterLink
      ><a href="mailto:lemonpaimc@163.com">联系我们</a>
    </nav>
    <small>© 2026 水印大师</small>
  </footer>
</template>
