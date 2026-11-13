<script setup lang="ts">
import { RouterLink } from "vue-router";
import RichText from "../components/RichText.vue";
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useI18n } from "../i18n";

const { messages } = useI18n();
const pageRoot = ref<HTMLElement>();
const activeSection = ref("scope");
let observer: IntersectionObserver | undefined;

/** The TOC reuses each section title without its leading “1. ” numbering. */
function tocLabel(title: string) {
  return title.replace(/^\d+\.\s*/, "");
}

onMounted(() => {
  if (!("IntersectionObserver" in window)) return;
  observer = new IntersectionObserver(
    (entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (current) activeSection.value = current.target.id;
    },
    { rootMargin: "-5% 0px -65% 0px", threshold: 0 },
  );
  pageRoot.value
    ?.querySelectorAll(".legal-section")
    .forEach((section) => observer?.observe(section));
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <main ref="pageRoot" class="page-width">
    <div class="legal-intro">
      <p class="section-kicker">{{ messages.privacy.kicker }}</p>
      <h1>{{ messages.privacy.title }}</h1>
      <p>{{ messages.privacy.intro }}</p>
      <div class="legal-meta">
        <span
          >{{ messages.privacy.updatedLabel
          }}<time :datetime="messages.privacy.updatedDatetime">{{
            messages.privacy.updatedValue
          }}</time></span
        ><span
          >{{ messages.privacy.appliesLabel
          }}{{ messages.privacy.appliesValue }}</span
        >
      </div>
    </div>
    <div class="legal-layout">
      <aside class="legal-toc" :aria-label="messages.privacy.tocLabel">
        <p>{{ messages.privacy.tocLabel }}</p>
        <nav :aria-label="messages.privacy.tocAria">
          <RouterLink
            v-for="section in messages.privacy.sections"
            :key="section.id"
            :to="{ name: 'privacy', hash: `#${section.id}` }"
            :class="{ 'is-active': activeSection === section.id }"
            :aria-current="
              activeSection === section.id ? 'location' : undefined
            "
            >{{ tocLabel(section.title) }}</RouterLink
          >
        </nav>
        <div class="legal-contact">
          {{ messages.privacy.contactLabel
          }}<a :href="`mailto:${messages.privacy.contactEmail}`">{{
            messages.privacy.contactEmail
          }}</a>
        </div>
      </aside>
      <article class="legal-article" id="policy">
        <div class="privacy-summary">
          <h2>{{ messages.privacy.summaryTitle }}</h2>
          <p v-for="(paragraph, index) in messages.privacy.summaryParagraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
        <section
          v-for="section in messages.privacy.sections"
          :key="section.id"
          class="legal-section"
          :id="section.id"
        >
          <h2>{{ section.title }}</h2>
          <template v-for="(node, nodeIndex) in section.nodes" :key="nodeIndex">
            <h3 v-if="node.kind === 'h3'">{{ node.text }}</h3>
            <p v-else-if="node.kind === 'p'">
              <RichText :content="node.content" />
            </p>
            <p v-else-if="node.kind === 'note'" class="legal-note">
              <RichText :content="node.content" />
            </p>
            <ul v-else-if="node.kind === 'list'">
              <li v-for="(item, itemIndex) in node.items" :key="itemIndex">
                <RichText :content="item" />
              </li>
            </ul>
            <div
              v-else-if="node.kind === 'table'"
              class="legal-table-wrap"
              role="region"
              :aria-label="node.aria"
              tabindex="0"
            >
              <table class="legal-table">
                <thead>
                  <tr>
                    <th
                      v-for="(cell, cellIndex) in node.head"
                      :key="cellIndex"
                      scope="col"
                    >
                      {{ cell }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rowIndex) in node.rows" :key="rowIndex">
                    <td
                      v-for="(cell, cellIndex) in row"
                      :key="cellIndex"
                    >
                      {{ cell }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else-if="node.kind === 'contact'" class="contact-box">
              <p><RichText :content="node.intro" /></p>
              <a :href="`mailto:${node.email}`">{{ node.email }}</a>
              <p class="legal-note"><RichText :content="node.note" /></p>
            </div>
          </template>
        </section>
      </article>
    </div>
  </main>
</template>
