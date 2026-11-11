<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted, onBeforeUnmount, ref } from "vue";
const pageRoot = ref<HTMLElement>();
const activeSection = ref("scope");
let observer: IntersectionObserver | undefined;

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
      <p class="section-kicker">你的照片，你来掌控</p>
      <h1>隐私政策</h1>
      <p>
        我们希望你知道，哪些信息用于提供功能，哪些内容留在设备上，以及你可以如何作出选择。
      </p>
      <div class="legal-meta">
        <span
          >更新日期：<time datetime="2026-11-11"
            >2026 年 11 月 11 日</time
          ></span
        ><span>适用于：水印大师 App 与本产品网站</span>
      </div>
    </div>
    <div class="legal-layout">
      <aside class="legal-toc" aria-label="政策目录">
        <p>阅读导航</p>
        <nav aria-label="隐私政策章节">
          <RouterLink
            :to="{ name: 'privacy', hash: '#scope' }"
            :class="{ 'is-active': activeSection === 'scope' }"
            :aria-current="activeSection === 'scope' ? 'location' : undefined"
            >适用范围</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#photos' }"
            :class="{ 'is-active': activeSection === 'photos' }"
            :aria-current="activeSection === 'photos' ? 'location' : undefined"
            >照片与拍摄信息</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#account' }"
            :class="{ 'is-active': activeSection === 'account' }"
            :aria-current="activeSection === 'account' ? 'location' : undefined"
            >账号与购买</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#diagnostics' }"
            :class="{ 'is-active': activeSection === 'diagnostics' }"
            :aria-current="
              activeSection === 'diagnostics' ? 'location' : undefined
            "
            >故障诊断</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#permissions' }"
            :class="{ 'is-active': activeSection === 'permissions' }"
            :aria-current="
              activeSection === 'permissions' ? 'location' : undefined
            "
            >权限与选择</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#storage' }"
            :class="{ 'is-active': activeSection === 'storage' }"
            :aria-current="activeSection === 'storage' ? 'location' : undefined"
            >存储与安全</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#providers' }"
            :class="{ 'is-active': activeSection === 'providers' }"
            :aria-current="
              activeSection === 'providers' ? 'location' : undefined
            "
            >第三方与跨境处理</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#website' }"
            :class="{ 'is-active': activeSection === 'website' }"
            :aria-current="activeSection === 'website' ? 'location' : undefined"
            >网站访问</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#rights' }"
            :class="{ 'is-active': activeSection === 'rights' }"
            :aria-current="activeSection === 'rights' ? 'location' : undefined"
            >你的权利</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#children' }"
            :class="{ 'is-active': activeSection === 'children' }"
            :aria-current="
              activeSection === 'children' ? 'location' : undefined
            "
            >未成年人保护</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#updates' }"
            :class="{ 'is-active': activeSection === 'updates' }"
            :aria-current="activeSection === 'updates' ? 'location' : undefined"
            >政策更新</RouterLink
          ><RouterLink
            :to="{ name: 'privacy', hash: '#contact' }"
            :class="{ 'is-active': activeSection === 'contact' }"
            :aria-current="activeSection === 'contact' ? 'location' : undefined"
            >联系我们</RouterLink
          >
        </nav>
        <div class="legal-contact">
          隐私反馈邮箱<a href="mailto:lemonpaimc@163.com">lemonpaimc@163.com</a>
        </div>
      </aside>
      <article class="legal-article" id="policy">
        <div class="privacy-summary">
          <h2>先说你最关心的</h2>
          <p>
            你选择的照片在设备本地完成水印合成和精修，本应用不会上传这些照片，也不会将其用于广告画像或训练模型。
          </p>
          <p>
            Apple 登录和购买由 Apple
            提供；启用故障诊断时，必要的错误信息会发送至
            Sentry。照片内容的本地处理不代表所有功能都没有网络通信。
          </p>
        </div>
        <section class="legal-section" id="scope">
          <h2>1. 适用范围与处理目的</h2>
          <p>
            本政策说明水印大师（以下简称“本应用”或“我们”）在提供照片预览、水印编辑、照片精修、保存成品、Apple
            登录和购买权益等功能时如何处理信息，也说明本产品网站的相关处理方式。
          </p>
          <p>
            我们仅为提供对应功能、维护运行稳定性、回应你的请求以及履行必要义务而处理所需信息。我们不出售你的照片或个人信息，不以这些信息进行广告画像。
          </p>
        </section>
        <section class="legal-section" id="photos">
          <h2>2. 照片与拍摄信息</h2>
          <h3>你选择的照片</h3>
          <p>
            当你主动选择照片时，本应用在设备上读取照片并完成预览、水印合成或精修。本应用不会将所选照片上传至我们的服务器或
            Sentry。只有你主动选择保存时，成品才会写入系统相册。
          </p>
          <h3>EXIF 与水印内容</h3>
          <p>
            为帮助填写水印，我们可能读取所选照片中已有的 EXIF
            信息，例如相机、镜头、焦距、光圈、快门、ISO、拍摄时间，以及照片中可用的地点信息。EXIF
            可能包含敏感的拍摄时间或位置线索，请在分享前检查照片和水印内容。
          </p>
          <p>
            你可以在应用设置中关闭后续照片的 EXIF
            读取，也可以手动编辑水印中的标题、描述、地点和相机参数。关闭 EXIF
            读取不会自动清除已导入或已填写的信息，请在需要时另行编辑。
          </p>
          <p>
            你保留对照片与文字的权利。本应用仅为在设备上实现你请求的编辑和导出而处理这些内容，不取得照片所有权，也不将其用于公开展示或训练模型。
          </p>
        </section>
        <section class="legal-section" id="account">
          <h2>3. 账号与购买</h2>
          <h3>Apple 登录与头像</h3>
          <p>
            如果你使用 Apple 登录，本应用会接收 Apple
            提供的账号标识，以及你授权共享的姓名，用于建立本机登录状态并显示账号信息。当前登录流程不请求邮箱权限；Apple
            可能按其服务规则处理认证信息。
          </p>
          <p>
            你主动选择的头像保存在设备本地，用于个人资料展示。登录资料保存在设备的安全存储中。你可以退出登录以清除本应用保存的登录资料；退出登录不等于删除
            Apple 账户或取消订阅。
          </p>
          <h3>应用内购买</h3>
          <p>
            应用内购买由 Apple App Store
            处理。本应用会读取必要的商品、交易和权益状态，以显示方案、验证或恢复购买。支付卡资料由
            Apple 管理，本应用不会获取完整支付卡信息。
          </p>
          <p>
            购买历史、账单与订阅管理请通过 Apple
            账户处理。卸载本应用或退出登录不会自动取消订阅。
          </p>
        </section>
        <section class="legal-section" id="diagnostics">
          <h2>4. 故障诊断与运行日志</h2>
          <p>
            为定位崩溃、错误与购买验证等功能异常，本应用集成了
            Sentry。当发布版本启用该服务时，必要的错误事件与运行日志会通过网络发送至
            Sentry。
          </p>
          <p>
            诊断信息可能包括错误消息、堆栈、应用版本、设备及操作系统信息、相关操作上下文、请求信息，以及服务连接产生的网络信息（例如
            IP 地址）。具体范围随故障类型和启用的诊断功能而变化。
          </p>
          <p>
            我们不主动向 Sentry 提供你的姓名或 Apple
            登录账号，也不启用照片附件、界面截图或会话回放。我们不通过故障诊断主动上传所选照片。诊断日志仍可能包含与错误相关的上下文，因此请不要在向我们反馈问题时主动发送不必要的敏感内容。
          </p>
          <p>
            诊断数据用于维护应用稳定性和排查故障。其服务端保留时间取决于实际启用的服务配置及必要的排错期限；如需查询或请求处理相关信息，请通过本政策列明的邮箱联系我们。详见
            <a
              href="https://sentry.io/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              >Sentry 隐私政策</a
            >及其<a
              href="https://docs.sentry.io/platforms/react-native/data-management/data-collected/"
              target="_blank"
              rel="noopener noreferrer"
              >数据处理说明</a
            >。
          </p>
        </section>
        <section class="legal-section" id="permissions">
          <h2>5. 权限与你的选择</h2>
          <div
            class="legal-table-wrap"
            role="region"
            aria-label="权限用途说明，可横向滚动"
            tabindex="0"
          >
            <table class="legal-table">
              <thead>
                <tr>
                  <th scope="col">权限或功能</th>
                  <th scope="col">使用目的</th>
                  <th scope="col">你的控制方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>照片访问</td>
                  <td>读取你选择的照片或头像</td>
                  <td>通过系统照片选择器或设备设置管理授权</td>
                </tr>
                <tr>
                  <td>写入相册</td>
                  <td>保存你主动导出的成品</td>
                  <td>在设备设置中允许或撤销</td>
                </tr>
                <tr>
                  <td>EXIF 读取</td>
                  <td>填充水印的拍摄信息</td>
                  <td>在 App 设置中关闭后续读取</td>
                </tr>
                <tr>
                  <td>Apple 登录</td>
                  <td>显示账号资料并保存本机登录状态</td>
                  <td>退出登录，或在 Apple 账户中管理授权</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="legal-note">
            拒绝或撤销权限可能使相关功能无法使用，但不影响其他无需该权限的功能。当前照片编辑流程不需要麦克风或实时定位权限，也不会通过这些权限主动录音或跟踪位置。
          </p>
        </section>
        <section class="legal-section" id="storage">
          <h2>6. 存储期限与安全</h2>
          <p>
            照片预览、编辑中间文件、头像、设置和权益状态可能存储在本机内存、缓存或应用存储中。临时文件可能在缓存清理或系统回收时删除；其他本地数据保留至被覆盖、主动清除或按系统规则移除。
          </p>
          <p>
            退出登录会清除本应用保存的登录资料，并尝试删除本应用管理的头像文件。卸载应用通常会移除应用沙盒数据，但系统安全存储或设备备份中的资料可能依系统机制保留。已导出至相册的成品不会因退出登录或卸载应用而自动删除，请在系统相册中管理。
          </p>
          <p>
            我们使用设备安全存储等与处理目的相适应的措施保护信息。Apple
            管理的数据、设备备份和 Sentry
            诊断记录具有各自的存储机制；退出登录或卸载不会自动删除这些服务端记录。如需协助，请联系我们或对应服务提供方。
          </p>
        </section>
        <section class="legal-section" id="providers">
          <h2>7. 第三方服务与跨境处理</h2>
          <p>
            照片内容在设备本地处理。以下服务可能为完成认证、购买、故障排查或应用更新而处理必要的网络数据：
          </p>
          <ul>
            <li>
              <strong>Apple：</strong>提供 Apple 登录、App Store
              购买、交易与订阅管理。相关信息按
              <a
                href="https://www.apple.com/legal/privacy/szh/"
                target="_blank"
                rel="noopener noreferrer"
                >Apple 隐私政策</a
              >处理。
            </li>
            <li>
              <strong>Sentry：</strong
              >在启用故障诊断时接收错误与运行信息，用于排查异常，详见本政策第 4
              节。
            </li>
            <li>
              <strong>Expo 更新服务：</strong>当应用检查或下载更新时，可能与
              Expo
              更新服务通信，处理应用版本、操作系统、用于判断更新下载状态的随机标识，以及连接所需的技术信息。该过程不用于上传你的照片。详见
              <a
                href="https://expo.dev/privacy"
                target="_blank"
                rel="noopener noreferrer"
                >Expo 隐私政策</a
              >。
            </li>
          </ul>
          <p>
            上述服务可能按其服务部署在不同国家或地区处理相关数据。具体处理地点、保留安排和保护措施依各服务的实际配置及政策而定。我们会在涉及新增处理方式或需要额外告知、授权的情况下提供相应说明。
          </p>
          <p>
            除提供上述功能所需的处理、你的主动指示或适用要求外，我们不会主动向其他方提供你的照片或个人信息。你主动将导出的照片分享到其他平台后，其后续处理由该平台的规则决定。
          </p>
        </section>
        <section class="legal-section" id="website">
          <h2>8. 本产品网站</h2>
          <p>
            本网站的水印预览、样式筛选、文字编辑与饱和度调节在浏览器中完成。演示不要求你上传个人照片，也不会将你输入的演示文字发送到服务器；刷新页面后会恢复初始状态。
          </p>
          <p>
            本网站页面代码没有集成广告、访问统计、追踪 Cookie
            或本地持久化存储。字体与演示图片随网站本地提供。网站托管服务在交付页面时可能按其配置记录
            IP
            地址、访问时间、请求路径与浏览器信息等必要访问日志；这些记录不等同于水印演示内容上传。
          </p>
          <p>
            你点击外部政策链接或邮件链接后，将进入相应第三方网站或邮件应用，其信息处理规则由相关服务另行说明。
          </p>
        </section>
        <section class="legal-section" id="rights">
          <h2>9. 你的信息权利</h2>
          <p>
            你可以在设备设置中管理照片权限，在 App 中关闭 EXIF
            读取、编辑账号头像或退出登录，在相册中删除导出的成品，并通过 Apple
            账户管理登录授权和购买记录。
          </p>
          <p>
            对于我们能够控制的个人信息，你可以联系我们提出查阅、复制、更正、删除、撤回同意或其他适用的信息权利请求。请说明所涉及的功能与请求内容；我们可能需要进行合理的身份核实，以防他人冒用你的身份操作。
          </p>
          <p>
            我们会在适用要求规定的期限内处理请求，或向你说明需要补充的信息与无法执行的原因。若相关数据仅存于你的设备，我们无法远程访问或替你删除，可协助你找到本机管理方式。
          </p>
        </section>
        <section class="legal-section" id="children">
          <h2>10. 未成年人保护</h2>
          <p>
            未成年人应在监护人的指导与同意下使用本应用。我们不以故障诊断或产品演示为目的主动索取儿童个人信息。若监护人认为未成年人在未获得适当同意的情况下向我们提供了个人信息，请通过邮箱联系我们，我们会核实并采取适当措施。
          </p>
        </section>
        <section class="legal-section" id="updates">
          <h2>11. 政策更新</h2>
          <p>
            我们可能随着功能和数据处理方式的变化更新本政策，并在页面标明更新日期。对于处理目的、信息范围或共享方式等实质变化，我们会通过应用内或商店页面提供相应告知；依法需要另行征得同意的，会履行相应程序。
          </p>
        </section>
        <section class="legal-section" id="contact">
          <h2>12. 联系我们</h2>
          <div class="contact-box">
            <p>
              如对本政策有疑问，或希望就你的个人信息提出请求，请联系水印大师开发者：
            </p>
            <a href="mailto:lemonpaimc@163.com">lemonpaimc@163.com</a>
            <p class="legal-note">
              邮件主题可注明“水印大师隐私反馈”。为便于定位问题，可提供应用版本、设备系统与相关功能说明；请勿附上密码、完整付款资料或不必要的私人照片。
            </p>
          </div>
        </section>
      </article>
    </div>
  </main>
</template>
