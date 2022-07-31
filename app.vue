<template>
  <div id="app">
    <c-nav />
    <NuxtPage class="app-page" />
    <c-footer />
  </div>
</template>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: [content-nav] auto [content-main] auto [content-footer] auto;
  grid-template-columns: [content-main] auto;

  .app-page {
    width: 100%;
    grid-row: content-main;
    grid-column: content-main;
    position: relative;
    padding: var(--space-small) 0 0px 0;
  }
}
</style>

<script>
function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
}

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

export default {
  mounted() {
    let hasUpdatedScroll = false
    function onScroll() {
      hasUpdatedScroll = false
      const percent = 1 - clamp(getScrollPercent(), 0, 1);
      document.documentElement.style.setProperty('--scroll-position', `${percent}%`);
    }

    let hasUpdatedResize = false
    const MIN_WIDTH = 900;
    function onResize() {
      hasUpdatedResize = false
      const scale = clamp(window.innerWidth / MIN_WIDTH, 0.75, 1);
      document.documentElement.style.setProperty('--mult', scale);
    }

    window.addEventListener('scroll', () => {
      if (!hasUpdatedScroll) {
        hasUpdatedScroll = true;
        requestAnimationFrame(onScroll)
      }
    });
    onScroll();

    window.addEventListener('resize', () => {
      if (!hasUpdatedResize) {
        hasUpdatedResize = true;
        requestAnimationFrame(onResize)
      }
    });
    onResize();
  }
}
</script>

<script setup>
const title = "Brain and Body Therapy";
const desc = "Traveling massage therapists come to your home within the greater Spokane area. Providing relaxation massage, pregnancy massage, therapeutic massage, stretching, craniosacral therapy (CST), Masgutova Neurosensorimotor Reflex Integration (MNRI), infant massage and pediatric bodywork.";
useHead({
  titleTemplate: (t => {
    if (t.length) {
      return t + ` | ${title}`;
    }
    else {
      return title;
    }
  }),
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  meta: [
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { name: 'description', content: desc },
    { name: 'og:url', content: "https://brainandbodycode.github.io/" },
    { name: 'og:image', content: "https://brainandbodycode.github.io/social-share.jpg" },
    { name: 'og:type', content: "website" },
  ],
  link: [
    { rel: 'icon', type: "image/png", href: '/favicon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Markazi+Text&display=swap' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>