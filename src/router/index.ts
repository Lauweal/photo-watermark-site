import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
      meta: {
        title: "水印大师 · 为照片，留下你的印记",
        description:
          "水印大师，为照片留下你的印记。探索经典影像、旅行邮票等八款水印，编辑拍摄信息，精修照片，在设备本地完成创作。",
      },
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../pages/PrivacyPage.vue"),
      meta: {
        title: "隐私政策 · 水印大师",
        description:
          "了解水印大师如何处理照片、EXIF 拍摄信息、Apple 登录、应用内购买和故障诊断数据，以及如何联系我们管理你的信息。",
      },
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

router.afterEach((to) => {
  document.title = String(to.meta.title);
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", String(to.meta.description));
});

export default router;
