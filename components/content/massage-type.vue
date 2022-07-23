<template>
    <div class="massage-type">
        <div class="grid">
            <h3 class="massage-type-title">{{ title }}</h3>
            <div class="massage-type-content">
                <slot />
            </div>
            <img class="massage-type-img" :src="`/assets/img/blog/${img}`" :alt="title" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
    },
}
</script>

<style lang="scss">
.massage-type {
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