<template>
    <div class="cbacking">
        <div class="cbacking-img" :style="{ backgroundImage: `url(/img/index-hero-img.jpeg)` }"></div>
        <div class="cbacking-top"></div>
    </div>
</template>

<style lang="scss">
.cbacking {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    grid-row: content-nav / span 2;
    grid-column: content-main;

    &-img {
        --scroll-percent:calc(100 * var(--scroll-position));
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 50% var(--scroll-percent);
    }

    &-top {
        position: absolute;
        opacity: 1;
        top: 0;
        left: 0;
        background-image: linear-gradient(0deg, #fff 0%, rgba(255,255,255,0.5) 50%, #fff 100%);
        width: 100%;
        height: 100%;
    }

}
</style>