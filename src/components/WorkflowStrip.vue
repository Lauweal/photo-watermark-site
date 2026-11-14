<script setup lang="ts">
import { motion } from "motion-v";
import { useSiteMotion } from "../composables/useSiteMotion";
import { useI18n } from "../i18n";

const { messages } = useI18n();
const { reducedMotion, transition } = useSiteMotion();
</script>

<template>
  <section
    id="workflow"
    class="workflow-section section-space page-width"
    aria-labelledby="workflow-title"
  >
    <div class="section-heading">
      <div>
        <p class="section-kicker">{{ messages.workflow.kicker }}</p>
        <h2 id="workflow-title">{{ messages.workflow.title }}</h2>
      </div>
      <p>
        <template
          v-for="(line, index) in messages.workflow.blurb.split('\n')"
          :key="index"
          ><br v-if="index > 0" />{{ line }}</template
        >
      </p>
    </div>
    <ol class="workflow-rail">
      <motion.li
        v-for="(step, index) in messages.workflow.steps"
        :key="step.index"
        class="workflow-step"
        :initial="{ opacity: 0, y: reducedMotion ? 0 : 18 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.4 }"
        :transition="{ ...transition, delay: reducedMotion ? 0 : index * 0.08 }"
      >
        <span class="workflow-index" aria-hidden="true">{{ step.index }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.body }}</p>
      </motion.li>
    </ol>
  </section>
</template>
