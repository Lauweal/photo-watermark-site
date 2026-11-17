<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import MotionRouterLink from "./MotionRouterLink.vue";
import LocaleSwitcher from "./LocaleSwitcher.vue";
import { asset } from "../lib/assets";
import { useSiteMotion } from "../composables/useSiteMotion";
import { useI18n } from "../i18n";
withDefaults(defineProps<{ page?: "home" | "legal" }>(), { page: "home" });
const { messages } = useI18n();
const { hoverLift, pressScale, transition } = useSiteMotion();
const route = useRoute();
const menuOpen = ref(false);
const headerRoot = ref<HTMLElement>();
const menuTrigger = ref<HTMLButtonElement>();

function closeMenu({ restoreFocus = false } = {}) {
  menuOpen.value = false;
  if (restoreFocus) menuTrigger.value?.focus();
}

function onDocumentPointerDown(event: PointerEvent) {
  if (menuOpen.value && !headerRoot.value?.contains(event.target as Node)) {
    closeMenu();
  }
}

function onDocumentKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && menuOpen.value)
    closeMenu({ restoreFocus: true });
}

watch(
  () => route.fullPath,
  () => closeMenu(),
);
onMounted(() => {
  document.addEventListener("pointerdown", onDocumentPointerDown);
  document.addEventListener("keydown", onDocumentKeydown);
});
onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", onDocumentPointerDown);
  document.removeEventListener("keydown", onDocumentKeydown);
});
</script>

<template>
  <header
    ref="headerRoot"
    class="site-header"
    :class="{ 'legal-header': page === 'legal' }"
  >
    <RouterLink class="brand" to="/" :aria-label="messages.header.brandAria"
      ><img :src="asset('icon.png')" width="36" height="36" alt="" /><span>{{
        messages.brand
      }}</span></RouterLink
    >
    <template v-if="page === 'home'">
      <nav class="desktop-nav" :aria-label="messages.header.navAria">
        <RouterLink :to="{ name: 'home', hash: '#styles' }">{{
          messages.header.navStyles
        }}</RouterLink
        ><RouterLink :to="{ name: 'home', hash: '#details' }">{{
          messages.header.navDetails
        }}</RouterLink
        ><RouterLink to="/privacy">{{ messages.header.navPrivacy }}</RouterLink>
      </nav>
      <div class="header-actions">
        <LocaleSwitcher />
        <MotionRouterLink
          class="button button-small button-dark"
          :to="{ name: 'home', hash: '#playground' }"
          :while-hover="hoverLift"
          :while-press="pressScale"
          :transition="transition"
          >{{ messages.header.cta }}
          <svg class="icon" aria-hidden="true"><use href="#icon-arrow" /></svg
        ></MotionRouterLink>
        <button
          ref="menuTrigger"
          class="mobile-menu-trigger"
          type="button"
          :aria-label="messages.header.navAria"
          :aria-expanded="menuOpen"
          aria-controls="mobile-navigation"
          @click="menuOpen = !menuOpen"
        >
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path :d="menuOpen ? 'm6 6 12 12M18 6 6 18' : 'M5 8h14M5 16h14'" />
          </svg>
        </button>
      </div>
      <nav
        v-if="menuOpen"
        id="mobile-navigation"
        class="mobile-navigation"
        :aria-label="messages.header.navAria"
      >
        <RouterLink :to="{ name: 'home', hash: '#styles' }">
          {{ messages.header.navStyles }}
        </RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#details' }">
          {{ messages.header.navDetails }}
        </RouterLink>
        <RouterLink to="/privacy">
          {{ messages.header.navPrivacy }}
        </RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#playground' }">
          {{ messages.header.cta }}
        </RouterLink>
      </nav>
    </template>
    <div v-else class="header-actions">
      <LocaleSwitcher />
      <RouterLink class="back-link" to="/"
        ><span aria-hidden="true">←</span>
        {{ messages.header.backToHome }}</RouterLink
      >
    </div>
  </header>
</template>
