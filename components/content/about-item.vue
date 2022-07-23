<template>
    <div class="about-item">
        <div class="grid">
            <div class="about-item-content">
                <slot />
            </div>
            <img class="about-item-img" :src="`assets/img/blog/${img}`" :alt="alt" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ""
        },
    },
}
</script>

<style lang="scss">
.about-item {
    padding: 20px 0;

    &-title {
        grid-column-start: main-start;
        grid-column-end: col-start 7;
    }

    &-content {
        grid-column-start: main-start;
        grid-column-end: col-start 7;
    }

    &-img {
        grid-column-start: col-start 7;
        grid-column-end: main-end;
        width: 100%;
        height: auto;
    }
}
</style>