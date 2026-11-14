<script setup lang="ts">
import MotionTextLink from "./MotionTextLink.vue";
import RichText from "./RichText.vue";
import { reactive } from "vue";
import { AnimatePresence, motion } from "motion-v";
import { useSiteMotion } from "../composables/useSiteMotion.js";
import { useI18n } from "../i18n";
import { legalContactEmail } from "../lib/legal";

const { messages } = useI18n();
const opened = reactive(new Set<number>());
function toggle(index: number) {
  if (opened.has(index)) opened.delete(index);
  else opened.add(index);
}
const { reducedMotion, transition } = useSiteMotion();
</script>

<template>
  <section
    class="faq-section section-space page-width"
    aria-labelledby="faq-title"
  >
    <div>
      <p class="section-kicker">{{ messages.faq.kicker }}</p>
      <h2 id="faq-title">{{ messages.faq.title }}</h2>
      <MotionTextLink :href="`mailto:${legalContactEmail}`">{{
        messages.faq.writeUs
      }}</MotionTextLink>
    </div>
    <div class="faq-list">
      <div
        v-for="(item, index) in messages.faq.items"
        :key="item.question"
        class="faq-item"
      >
        <button
          :id="`faq-question-${index}`"
          type="button"
          class="faq-trigger"
          :aria-expanded="opened.has(index)"
          :aria-controls="`faq-answer-${index}`"
          @click="toggle(index)"
        >
          {{ item.question
          }}<motion.span
            aria-hidden="true"
            :animate="{ rotate: opened.has(index) ? 45 : 0 }"
            :transition="transition"
            >+</motion.span
          >
        </button>
        <AnimatePresence :initial="false">
          <motion.div
            v-if="opened.has(index)"
            :id="`faq-answer-${index}`"
            :key="index"
            class="faq-answer"
            role="region"
            :aria-labelledby="`faq-question-${index}`"
            :initial="{ height: 0, opacity: 0 }"
            :animate="{ height: 'auto', opacity: 1 }"
            :exit="{ height: 0, opacity: 0 }"
            :transition="{ ...transition, duration: reducedMotion ? 0 : 0.25 }"
          >
            <div class="faq-content">
              <p><RichText :content="item.answer" /></p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
</template>
