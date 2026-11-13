<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { AnimatePresence, motion } from "motion-v";
import { localeCodes, useI18n, type Locale } from "../i18n";
import { catalogs } from "../i18n/messages";
import { useSiteMotion } from "../composables/useSiteMotion";

const { locale, messages, setLocale } = useI18n();
const { reducedMotion, transition } = useSiteMotion();

const open = ref(false);
const root = ref<HTMLElement>();
const trigger = ref<HTMLButtonElement>();

const options = computed(() =>
  localeCodes.map((code) => ({ code, label: catalogs[code].localeLabel })),
);

function choose(code: Locale) {
  setLocale(code);
  close();
}

function close() {
  open.value = false;
  trigger.value?.focus();
}

function onPointerDown(event: PointerEvent) {
  if (!open.value) return;
  if (root.value && !root.value.contains(event.target as Node)) open.value = false;
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && open.value) close();
}

onMounted(() => {
  document.addEventListener("pointerdown", onPointerDown);
  document.addEventListener("keydown", onKeydown);
});
onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", onPointerDown);
  document.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <div ref="root" class="locale-switcher">
    <motion.button
      ref="trigger"
      type="button"
      class="locale-trigger"
      :aria-label="messages.header.languageAria"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :while-press="{ scale: reducedMotion ? 1 : 0.97 }"
      :transition="transition"
      @click="open = !open"
    >
      <svg class="icon" aria-hidden="true"><use href="#icon-globe" /></svg>
      <span>{{ messages.localeLabel }}</span>
      <motion.svg
        class="icon locale-chevron"
        aria-hidden="true"
        :animate="{ rotate: open ? 180 : 0 }"
        :transition="{ ...transition, duration: reducedMotion ? 0 : 0.22 }"
      >
        <use href="#icon-chevron" />
      </motion.svg>
    </motion.button>
    <AnimatePresence>
      <motion.ul
        v-if="open"
        class="locale-menu"
        role="listbox"
        :aria-label="messages.header.languageMenuAria"
        :initial="reducedMotion ? false : { opacity: 0, y: -8, scale: 0.97 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :exit="{ opacity: 0, y: -6, scale: 0.98 }"
        :transition="{ ...transition, duration: reducedMotion ? 0 : 0.2 }"
      >
        <li v-for="option in options" :key="option.code">
          <button
            type="button"
            class="locale-option"
            role="option"
            :aria-selected="option.code === locale"
            :class="{ 'is-active': option.code === locale }"
            :lang="option.code"
            @click="choose(option.code)"
          >
            <span>{{ option.label }}</span>
            <svg
              v-if="option.code === locale"
              class="icon"
              aria-hidden="true"
            >
              <use href="#icon-check" />
            </svg>
          </button>
        </li>
      </motion.ul>
    </AnimatePresence>
  </div>
</template>
