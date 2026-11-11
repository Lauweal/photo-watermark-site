<script setup lang="ts">
import { motion } from "motion-v";
import { RouterLink, type RouteLocationRaw } from "vue-router";

defineOptions({ inheritAttrs: false });
defineProps<{ to: RouteLocationRaw }>();
</script>

<template>
  <RouterLink v-slot="{ href, navigate }" :to="to" custom>
    <motion.a v-bind="$attrs" :href="href" @click="navigate">
      <slot />
    </motion.a>
  </RouterLink>
</template>
