<script setup lang="ts">
import { asset } from "../lib/assets";
</script>

<template>
  <section
    class="details-section section-space page-width"
    id="details"
    aria-labelledby="details-title"
  >
    <div class="section-heading">
      <div>
        <p class="section-kicker">从按下快门，到分享之前</p>
        <h2 id="details-title">让创作，顺手一点。</h2>
      </div>
      <p>把繁琐留给工具，<br />把注意力还给照片。</p>
    </div>
    <div class="detail-grid">
      <article class="detail-exif">
        <div class="detail-visual exif-visual" aria-hidden="true">
          <svg class="icon"><use href="#icon-camera" /></svg>
          <div class="exif-line">
            <span>焦距</span><strong>85 <small>mm</small></strong>
          </div>
          <div class="exif-line"><span>光圈</span><strong>f/2.5</strong></div>
          <div class="exif-line">
            <span>感光度</span><strong>ISO 100</strong>
          </div>
          <span class="exif-confirm"
            ><svg class="icon"><use href="#icon-check" /></svg>
            来自照片的拍摄信息</span
          >
        </div>
        <div class="detail-copy">
          <h3>每一次快门，都有迹可循。</h3>
          <p>
            读取照片的 EXIF
            信息，将相机参数带入水印。标题、描述与地点，也能按你的想法编辑。
          </p>
          <span>EXIF 读取可在 App 设置中关闭</span>
        </div>
      </article>
      <article class="detail-retouch">
        <div class="detail-visual retouch-visual" aria-hidden="true">
          <div class="retouch-photo photo-crop">
            <img
              :src="asset('classic.jpg')"
              width="1280"
              height="1313"
              loading="lazy"
              alt=""
            />
          </div>
          <div class="retouch-strip">
            <svg class="icon"><use href="#icon-sliders" /></svg><span>光线</span
            ><span class="selected">色彩</span><span>曲线</span>
            <div class="mini-slider"><i></i></div>
          </div>
        </div>
        <div class="detail-copy">
          <h3>调到你记忆里的那束光。</h3>
          <p>
            在 Pro
            中调整光线、色彩与曲线，精修后再添加水印，让画面和落款自然地融在一起。
          </p>
          <span class="detail-pro">Pro 照片精修</span>
        </div>
      </article>
    </div>
  </section>
</template>
