<script setup lang="ts">
import { computed, onBeforeUnmount, ref, shallowRef, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import RichText from "../components/RichText.vue";
import { useI18n } from "../i18n";
import {
  isLegalDocumentId,
  legalBlocks,
  legalContactEmail,
  legalCopy,
  legalReadingCopy,
  getWebLegalBundle,
} from "../lib/legal";
import type { LegalBundle } from "../../../src/features/legal/types";

const route = useRoute();
const { locale } = useI18n();
const copy = computed(() => legalCopy[locale.value]);
const documentId = computed(() =>
  isLegalDocumentId(route.name) ? route.name : "privacy",
);
const readingMode = ref({ locale: locale.value, original: false });
const showOriginal = computed(() => readingMode.value.locale === locale.value && readingMode.value.original);
const contentLanguage = computed(() => showOriginal.value ? "zh-Hans" : locale.value);
const bundle = shallowRef<LegalBundle>();
const loadFailed = ref(false);
const retryCount = ref(0);
const readingCopy = computed(() => legalReadingCopy[locale.value]);
const document = computed(() => bundle.value?.documents[documentId.value]);
watch([contentLanguage, retryCount], async ([language], _previous, onCleanup) => {
  let cancelled = false;
  onCleanup(() => { cancelled = true; });
  bundle.value = undefined;
  loadFailed.value = false;
  try {
    const nextBundle = await getWebLegalBundle(language);
    if (!cancelled) bundle.value = nextBundle;
  } catch {
    if (!cancelled) loadFailed.value = true;
  }
}, { immediate: true });
const sections = computed(() =>
  (document.value?.sections ?? []).map((section, index) => ({
    ...section,
    id: `section-${index}`,
    blocks: legalBlocks(section.body),
  })),
);
watch(sections, () => {
  if (route.hash) {
    window.document.getElementById(route.hash.slice(1))?.scrollIntoView({ block: "start" });
  }
}, { flush: "post" });
const pageRoot = ref<HTMLElement>();
const activeSection = ref("section-0");
let observer: IntersectionObserver | undefined;

watch(
  [sections, pageRoot],
  () => {
    observer?.disconnect();
    activeSection.value = "section-0";
    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (current) activeSection.value = current.target.id;
      },
      { rootMargin: "-5% 0px -65% 0px", threshold: 0 },
    );
    pageRoot.value
      ?.querySelectorAll(".legal-section")
      .forEach((section) => observer?.observe(section));
  },
  { flush: "post" },
);
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <main v-if="document" ref="pageRoot" class="page-width">
    <div class="legal-intro">
      <p class="section-kicker">{{ copy.kicker }}</p>
      <h1 :lang="contentLanguage">{{ document.title }}</h1>
      <p>{{ showOriginal || locale === "zh-Hans" ? readingCopy.originalNotice : readingCopy.notice }}</p>
      <button
        v-if="locale !== 'zh-Hans'"
        class="legal-source-toggle"
        type="button"
        @click="readingMode = { locale, original: !showOriginal }"
      >{{ showOriginal ? readingCopy.showTranslation : readingCopy.showOriginal }}</button>
    </div>
    <div class="legal-layout">
      <aside class="legal-toc" :aria-label="copy.toc">
        <p>{{ copy.toc }}</p>
        <nav :aria-label="copy.toc" :lang="contentLanguage">
          <RouterLink
            v-for="section in sections"
            :key="section.id"
            :to="{ name: documentId, hash: `#${section.id}` }"
            :class="{ 'is-active': activeSection === section.id }"
            :aria-current="
              activeSection === section.id ? 'location' : undefined
            "
            >{{ section.heading }}</RouterLink
          >
        </nav>
        <div class="legal-contact">
          {{ copy.contact }}
          <a :href="`mailto:${legalContactEmail}`">{{ legalContactEmail }}</a>
        </div>
      </aside>
      <article id="policy" class="legal-article legal-source" :lang="contentLanguage">
        <section
          v-for="section in sections"
          :id="section.id"
          :key="section.id"
          class="legal-section"
        >
          <h2>{{ section.heading }}</h2>
          <template v-for="(block, index) in section.blocks" :key="index">
            <h3 v-if="block.kind === 'heading'">{{ block.text }}</h3>
            <ol v-else-if="block.kind === 'list'" :start="block.start">
              <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
                <RichText :content="item" />
              </li>
            </ol>
            <p v-else><RichText :content="block.content" /></p>
          </template>
        </section>
      </article>
    </div>
  </main>
  <main v-else class="page-width legal-intro" :aria-busy="!loadFailed">
    <template v-if="loadFailed">
      <p role="alert">{{ copy.loadError }}</p>
      <button class="legal-source-toggle" type="button" @click="retryCount += 1">{{ copy.retry }}</button>
    </template>
  </main>
</template>
