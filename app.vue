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
    padding: 20px 0 20px 0;
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

export default {
  mounted() {
    // console.log("mounted");
    let hasUpdated = false
    function onScroll() {
      hasUpdated = false
      const percent = 1 - Math.min(Math.max(getScrollPercent(), 0), 1);
      document.documentElement.style.setProperty('--scroll-position', `${percent}%`);
    }

    window.addEventListener('scroll', () => {
      if (!hasUpdated) {
        requestAnimationFrame(onScroll)
      }
    });
    onScroll();
  }
}
</script>

<script setup>
useHead({
  title: 'Brain and Body Therapy | Spokane Mobile Massage and Bodywork',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Traveling massage therapists come to your home within the greater Spokane area. Providing relaxation massage, pregnancy massage, therapeutic massage, stretching, craniosacral therapy (CST), Masgutova Neurosensorimotor Reflex Integration (MNRI), infant massage and pediatric bodywork.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>