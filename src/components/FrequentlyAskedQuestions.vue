<script setup lang="ts">
import { RouterLink } from "vue-router";
import MotionTextLink from "./MotionTextLink.vue";
import { reactive } from "vue";
import { AnimatePresence, motion } from "motion-v";
import { useSiteMotion } from "../composables/useSiteMotion.js";

const opened = reactive(new Set<number>());
function toggle(index: number) {
  if (opened.has(index)) opened.delete(index);
  else opened.add(index);
}
const { reducedMotion, transition } = useSiteMotion();
const questions = [
  {
    question: "基础样式和 Pro 有什么区别？",
    answer:
      "基础套餐包含经典影像、哈苏签名、留白经典，以及照片信息编辑。Pro 包含基础功能、更多专属水印样式和照片精修功能。具体权益与可购买方案以 App 内展示为准。",
  },
  {
    question: "我的照片会被上传吗？",
    answer:
      "本应用不会上传你选择的照片，水印合成和精修均在设备本地进行。Apple 登录、购买以及启用后的故障诊断可能涉及必要的网络通信，具体请查看",
    privacyLink: true,
  },
  {
    question: "可以修改照片上的拍摄信息吗？",
    answer:
      "可以。App 支持编辑水印中的标题、描述、地点和拍摄参数等字段；不同样式提供的字段有所不同。你也可以关闭后续照片的 EXIF 读取，手动填写内容。",
  },
  {
    question: "这个网页可以导出我的照片吗？",
    answer:
      "网页提供水印样式浏览、版式和饱和度的交互演示。导入自己的照片、使用完整水印和将成品保存到相册，需要在 App 中操作。",
  },
];
</script>

<template>
  <section
    class="faq-section section-space page-width"
    aria-labelledby="faq-title"
  >
    <div>
      <p class="section-kicker">开始之前</p>
      <h2 id="faq-title">你可能还想知道</h2>
      <MotionTextLink href="mailto:lemonpaimc@163.com"
        >写信给我们</MotionTextLink
      >
    </div>
    <div class="faq-list">
      <div
        v-for="(item, index) in questions"
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
              <p>
                {{ item.answer
                }}<template v-if="item.privacyLink"
                  ><RouterLink to="/privacy">隐私政策</RouterLink>。</template
                >
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
</template>
