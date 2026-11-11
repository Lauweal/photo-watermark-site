<script setup lang="ts">
import { motion } from "motion-v";
import { useSiteMotion } from "../composables/useSiteMotion";

withDefaults(defineProps<{ href: string; arrow?: "diagonal" | "right" }>(), {
  arrow: "diagonal",
});
const { reducedMotion, transition } = useSiteMotion();
const arrowVariants = {
  rest: { x: 0, y: 0 },
  hovered: { x: 3, y: -2 },
};
</script>

<template>
  <motion.a
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
  </motion.a>
</template>
