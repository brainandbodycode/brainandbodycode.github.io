<template>
    <div class="content-highlight grid">
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
        alt: {
            type: String,
            default: ''
        },
    }
}
</script>

<style lang="scss">
.content-highlight {
    grid-template-rows: [content-top] auto;
    align-items: stretch;

    &-content {
        grid-column-start: main-start;
        grid-column-end: col-start 6;
        grid-row: content-top / span 1;
        display: flex;
        flex-direction: column;
        z-index: 2;
        border-radius: 5px;

    }

    &-img {
        grid-column-start: col-start 6;
        grid-column-end: main-end;
        grid-row: content-top / span 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        z-index: 1;
        border-radius: 5px;
    }
}
</style>