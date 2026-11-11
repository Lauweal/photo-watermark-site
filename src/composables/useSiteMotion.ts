import { computed } from "vue";
import { useReducedMotion } from "motion-v";

export function useSiteMotion() {
  const reducedMotion = useReducedMotion();
  const transition = computed(() => ({
    duration: reducedMotion.value ? 0 : 0.32,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  }));
  const hoverLift = computed(() => ({ y: reducedMotion.value ? 0 : -3 }));
  const pressScale = computed(() => ({
    scale: reducedMotion.value ? 1 : 0.98,
  }));

  return { reducedMotion, transition, hoverLift, pressScale };
}
