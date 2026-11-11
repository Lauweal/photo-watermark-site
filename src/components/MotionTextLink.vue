<script setup lang="ts">
import { motion } from "motion-v";
import { useSiteMotion } from "../composables/useSiteMotion";
import type { RouteLocationRaw } from "vue-router";
import MotionRouterLink from "./MotionRouterLink.vue";

withDefaults(
  defineProps<{
    href?: string;
    to?: RouteLocationRaw;
    arrow?: "diagonal" | "right";
  }>(),
  { arrow: "diagonal" },
);
const { reducedMotion, transition } = useSiteMotion();
const arrowVariants = {
  rest: { x: 0, y: 0 },
  hovered: { x: 3, y: -2 },
};
</script>

<template>
  <component
    :is="to ? MotionRouterLink : motion.a"
    :to="to"
    :href="href"
    class="text-link"
    initial="rest"
    animate="rest"
    :while-hover="reducedMotion ? 'rest' : 'hovered'"
  >
    <slot />
    <motion.svg
      v-if="arrow === 'right'"
      class="icon"
      aria-hidden="true"
      :variants="arrowVariants"
      :transition="{ ...transition, duration: reducedMotion ? 0 : 0.25 }"
      ><use href="#icon-arrow"
    /></motion.svg>
    <motion.span
      v-else
      aria-hidden="true"
      :variants="arrowVariants"
      :transition="{ ...transition, duration: reducedMotion ? 0 : 0.25 }"
      >↗</motion.span
    >
  </component>
</template>
