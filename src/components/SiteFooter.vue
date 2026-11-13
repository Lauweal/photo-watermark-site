<script setup lang="ts">
import { asset } from "../lib/assets";
import { RouterLink } from "vue-router";
import { useI18n } from "../i18n";
withDefaults(defineProps<{ page?: "home" | "privacy" }>(), { page: "home" });
const { messages } = useI18n();
</script>

<template>
  <footer class="site-footer page-width">
    <RouterLink class="brand" to="/"
      ><img :src="asset('icon.png')" width="30" height="30" alt="" /><span>{{
        messages.brand
      }}</span></RouterLink
    >
    <p>{{ messages.footer.tagline }}</p>
    <nav :aria-label="messages.footer.navAria">
      <RouterLink :to="page === 'privacy' ? '/' : '/privacy'">{{
        page === "privacy" ? messages.common.home : messages.common.privacy
      }}</RouterLink
      ><a href="mailto:lemonpaimc@163.com">{{ messages.footer.contact }}</a>
    </nav>
    <small>{{ messages.footer.copyright }}</small>
  </footer>
</template>
