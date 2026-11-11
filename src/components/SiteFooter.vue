<script setup lang="ts">
import { asset } from "../lib/assets";
withDefaults(defineProps<{ page?: "home" | "privacy" }>(), { page: "home" });
</script>

<template>
  <footer class="site-footer page-width">
    <a class="brand" href="index.html"
      ><img :src="asset('icon.png')" width="30" height="30" alt="" /><span
        >水印大师</span
      ></a
    >
    <p>留住瞬间，也留下故事。</p>
    <nav aria-label="页脚导航">
      <a :href="page === 'privacy' ? 'index.html' : 'privacy.html'">{{
        page === "privacy" ? "产品首页" : "隐私政策"
      }}</a
      ><a href="mailto:lemonpaimc@163.com">联系我们</a>
    </nav>
    <small>© 2026 水印大师</small>
  </footer>
</template>
