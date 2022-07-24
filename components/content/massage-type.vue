<template>
    <div class="massage-type">
        <div class="grid">
            <div class="massage-type-content" :class="{ flip: flip }">
                <h2>{{ title }}</h2>
                <slot />
            </div>
            <img class="massage-type-img" :class="{ flip: flip }" :src="`${img}`" :alt="title" />
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
        flip: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="scss">
.massage-type {
    grid-template-rows: [content] auto;

    &-content {
        grid-column-start: main-start;
        grid-column-end: col-start 6;
        grid-row: content;
    }

    &-content.flip {
        grid-column-start: col-start 8;
        grid-column-end: main-end;
    }

    &-img {
        grid-column-start: col-start 6;
        grid-column-end: main-end;
        grid-row: content;
        width: 100%;
        height: auto;
        border-radius: var(--border-radius);
    }

    &-img.flip {
        grid-column-start: main-start;
        grid-column-end: col-start 8;
    }
}
</style>