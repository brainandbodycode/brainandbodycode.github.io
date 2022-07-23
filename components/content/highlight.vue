<template>
    <div class="content-highlight grid">
        <div class="content-highlight-content">
            <slot />
        </div>
        <img class="content-highlight-img" :src="src" alt="">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss">
.content-highlight {
    --golden-inverse: 0.618;
    --content-height: 100px;
    min-height: var(--content-height);
    grid-template-rows: [content-top] auto [content-overlap] 300px [content-bottom] auto;
    align-items: stretch;

    &-content {
        grid-column-start: main-start;
        grid-column-end: col-start 8;
        grid-row: content-top / span 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: #1b1c1dee;
        padding: 10px 20px;
        z-index: 2;
        color: var(--white);
        border-radius: 5px;

    }

    &-img {
        grid-column-start: col-start 6;
        grid-column-end: main-end;
        grid-row: content-overlap / span 2;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        z-index: 1;
        border-radius: 5px;
    }
}
</style>