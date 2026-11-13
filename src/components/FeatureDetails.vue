<script setup lang="ts">
import { asset } from "../lib/assets";
import { useI18n } from "../i18n";

const { messages } = useI18n();
</script>

<template>
  <section
    class="details-section section-space page-width"
    id="details"
    aria-labelledby="details-title"
  >
    <div class="section-heading">
      <div>
        <p class="section-kicker">{{ messages.details.kicker }}</p>
        <h2 id="details-title">{{ messages.details.title }}</h2>
      </div>
      <p>
        <template
          v-for="(line, index) in messages.details.blurb.split('\n')"
          :key="index"
          ><br v-if="index > 0" />{{ line }}</template
        >
      </p>
    </div>
    <div class="detail-grid">
      <article class="detail-exif">
        <div class="detail-visual exif-visual" aria-hidden="true">
          <svg class="icon"><use href="#icon-camera" /></svg>
          <div class="exif-line">
            <span>{{ messages.details.exifFocal }}</span
            ><strong>85 <small>mm</small></strong>
          </div>
          <div class="exif-line">
            <span>{{ messages.details.exifAperture }}</span
            ><strong>f/2.5</strong>
          </div>
          <div class="exif-line">
            <span>{{ messages.details.exifIso }}</span><strong>ISO 100</strong>
          </div>
          <span class="exif-confirm"
            ><svg class="icon"><use href="#icon-check" /></svg>
            {{ messages.details.exifConfirm }}</span
          >
        </div>
        <div class="detail-copy">
          <h3>{{ messages.details.exifTitle }}</h3>
          <p>{{ messages.details.exifBody }}</p>
          <span>{{ messages.details.exifNote }}</span>
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
            <svg class="icon"><use href="#icon-sliders" /></svg
            ><span>{{ messages.details.retouchTabs[0] }}</span
            ><span class="selected">{{ messages.details.retouchTabs[1] }}</span
            ><span>{{ messages.details.retouchTabs[2] }}</span>
            <div class="mini-slider"><i></i></div>
          </div>
        </div>
        <div class="detail-copy">
          <h3>{{ messages.details.retouchTitle }}</h3>
          <p>{{ messages.details.retouchBody }}</p>
          <span class="detail-pro">{{ messages.details.retouchBadge }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
