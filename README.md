# 水印大师 · Vue 产品网站

从 `photo-watermark/web` 迁移的 Vue 3 + TypeScript + Vite 单页网站，路由采用 vue-router hash 模式，动画采用 Motion 官方 Vue 包 `motion-v`。保留紫灰配色、全部八款水印样例、交互工作台、隐私政策和反馈邮箱 `lemonpaimc@163.com`。

## 本地运行

```sh
cd /Users/fred/work/photo-watermark-site
pnpm install
pnpm dev
```

开发首页：`http://localhost:5173/#/`，隐私页：`http://localhost:5173/#/privacy`。

```sh
pnpm lint        # Vue / TypeScript 的 ESLint 检查
pnpm typecheck   # vue-tsc
pnpm build       # 类型检查并生成 dist/
pnpm preview     # 预览生产构建
pnpm exec prettier --check src index.html vite.config.ts eslint.config.js
```

## 实现结构

- `src/main.ts` / `src/App.vue`：唯一的 Vue 入口与应用布局，通过 `RouterView` 切换页面，共用导航、页脚与 Motion 配置。
- `src/router/index.ts`：使用 `createWebHashHistory()`；首页为 `#/`，隐私页为 `#/privacy`（按需加载），未知路由返回首页。统一处理页面标题、描述、章节滚动和前进/后退位置恢复。
- `src/components/MotionRouterLink.vue`：支持 Motion 动效的站内路由链接。
- `src/components/HeroSection.vue`：首屏照片展开，使用 `motion` 和 `useSpring` 实现鼠标倾斜。
- `src/components/StyleGallery.vue`：响应式筛选、布局过渡、原生 dialog 大图预览和 Motion 进出场。
- `src/components/WatermarkPlayground.vue`：`reactive` 管理版式、文案、色调与饱和度，支持一键恢复。
- `src/components/FrequentlyAskedQuestions.vue`：可键盘操作的折叠面板，使用 `AnimatePresence` 控制内容进出。
- `src/pages/PrivacyPage.vue`：完整政策正文、阅读导航和当前章节提示。
- `src/data/watermarkStyles.ts`：八款水印的统一数据源。
- `src/composables/useSiteMotion.ts`：统一动效参数，响应系统“减少动态效果”偏好。
- `src/style.css`：原网站的视觉和响应式样式；没有 CSS 关键帧和 CSS 动画过渡。
- `public/assets/`：本地图片、产品图标与字体，不依赖外部 CDN。

交互状态由 Vue 管理，动画使用 `motion`、`AnimatePresence`、`useAnimate` 和 `useSpring`。保留原生范围滑块、键盘焦点与 dialog 的 Escape 关闭、焦点约束及返回行为。设置减少动态效果时，位移、弹簧和进出场时长会相应关闭。

## 构建与部署

采用 Vite SPA 构建，只生成一个 HTML 入口 `dist/index.html`。使用 hash 路由，直接打开或刷新 `#/privacy` 无需服务器回退配置；旧的 `privacy.html` 入口已移除，对外隐私政策链接应更新为 `/#/privacy`（仓库子路径下为 `/仓库名/#/privacy`）。站内章节链接采用 `#/#styles`、`#/privacy#photos` 等形式，由路由统一滚动定位。`base: './'` 与统一资源 URL 使构建可以放在 GitHub Pages 仓库子路径或自定义域名下。

仓库根目录的 `.github/workflows/deploy-site-pages.yml` 会从根目录的 `package.json` 读取 `packageManager` 中的 pnpm 版本，安装依赖、执行 lint 和生产构建，再上传 `dist`。推送 `main` 时触发，也支持手动运行。

首次部署仍需到仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。默认 `GITHUB_TOKEN` 不用于首次创建 Pages 站点；不要只添加 `enablement: true` 来绕过设置。成功部署后，实际网址以 Actions 的 `github-pages` 环境输出为准。

## 内容与隐私

网页演示不导入或导出用户照片，不发送演示文字、不保存交互状态；刷新即恢复初始值。完整照片编辑与导出在 App 中进行。所有原网站政策章节均已迁移。

App Store 下载链接仍待提供，当前主要按钮进入网页工作台。正式发布前请核对 App 的实际诊断配置、服务数据保留安排和运营主体信息，并使应用内政策与网站保持一致。

原 `photo-watermark/web` 文件夹保留为静态版本，本次迁移不修改移动应用代码。

## 原版一致性验证

对比范围、修正项和截图见 [UI / 交互对比记录](docs/ui-parity-report.md)。
