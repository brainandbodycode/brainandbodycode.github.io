<template>
    <div class="content-highlight grid">
        <div class="content-highlight-bg">
            <div class="content-highlight-bg-img" :style="{ backgroundImage: `url(${bgsrc_})` }" />
            <div class="content-highlight-bg-color" />
        </div>
        <div class="content-highlight-content">
            <slot />
        </div>
        <img class="content-highlight-img" :src="src" :alt="alt">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        bgsrc: {
            type: [String, undefined],
            default: undefined
        },
        alt: {
            type: String,
            default: ''
        },
    },
    computed: {
        bgsrc_() {
            return this.bgsrc ?? this.src
        }
    }
}
</script>

<style lang="scss">
.content-highlight {
    grid-template-rows: [spacing-top] 60px [content-top] auto [spacing-bottom] 60px [overlap-bottom] 60px;
    align-items: stretch;
    overflow: hidden;
    // background-color: var(--color5);

    &-bg {
        position: relative;
        grid-row: spacing-top / span 3;
        grid-column-start: full-start;
        grid-column-end: full-end;
        overflow: hidden;
        border-radius: var(--border-radius);
        border: 1px solid var(--color4);

        &-img {
            background-size: cover;
            background-position: 50% 50%;
            filter: blur(60px);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &-color {
            mix-blend-mode: screen;
            background-color: var(--color2);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    &-content {
        position: relative;
        grid-column-start: main-start;
        grid-column-end: col-start 6;
        grid-row: content-top;
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    &-img {
        position: relative;
        grid-column-start: col-start 6;
        grid-column-end: main-end;
        grid-row: content-top / span 3;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        z-index: 1;
        border-radius: var(--border-radius);
    }
}
</style>