import { watch } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { useI18n } from "../i18n";
import LandingPage from "../pages/LandingPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "home", component: LandingPage },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../pages/PrivacyPage.vue"),
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return { ...savedPosition, behavior: "instant" };
    if (to.hash) {
      const element = document.getElementById(to.hash.slice(1));
      if (element) {
        const padding = parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        );
        const margin = parseFloat(getComputedStyle(element).scrollMarginTop);
        return {
          el: element,
          top: (padding || 0) + (margin || 0),
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        };
      }
    }
    return { top: 0, behavior: "instant" };
  },
});

const { locale, messages } = useI18n();

/** Keep the document title and social meta in sync with the active locale. */
function applyMeta(page: unknown) {
  const copy =
    page === "privacy" ? messages.value.meta.privacy : messages.value.meta.home;
  document.title = copy.title;
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", copy.title);
  for (const selector of [
    'meta[name="description"]',
    'meta[property="og:description"]',
  ]) {
    document.querySelector(selector)?.setAttribute("content", copy.description);
  }
}

router.afterEach((to) => applyMeta(to.name));
watch(locale, () => applyMeta(router.currentRoute.value.name));

export default router;
