<script setup lang="ts">
import { asset } from "../lib/assets";
import { RouterLink } from "vue-router";
import { useI18n } from "../i18n";
import { computed } from "vue";
import { legalContactEmail, legalCopy, legalDocumentIds } from "../lib/legal";
withDefaults(defineProps<{ page?: "home" | "legal" }>(), { page: "home" });
const { locale, messages } = useI18n();
const copy = computed(() => legalCopy[locale.value]);
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
      <RouterLink v-if="page === 'legal'" to="/">{{
        messages.common.home
      }}</RouterLink>
      <RouterLink v-for="id in legalDocumentIds" :key="id" :to="{ name: id }">
        {{ copy.titles[id] }}
      </RouterLink>
      <a :href="`mailto:${legalContactEmail}`">{{ messages.footer.contact }}</a>
    </nav>
    <small>{{ messages.footer.copyright }}</small>
  </footer>
</template>
