<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { Inline } from "../i18n/types";

defineProps<{ content: Inline[] }>();
</script>

<template>
  <template v-for="(part, index) in content" :key="index">
    <template v-if="typeof part === 'string'">{{ part }}</template>
    <strong v-else-if="'strong' in part">{{ part.strong }}</strong>
    <a
      v-else-if="part.external"
      :href="part.href"
      target="_blank"
      rel="noopener noreferrer"
      >{{ part.link }}</a
    >
    <RouterLink v-else :to="part.href">{{ part.link }}</RouterLink>
  </template>
</template>
