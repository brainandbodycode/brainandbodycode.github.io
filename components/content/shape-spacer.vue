<template>
    <div class="shape-spacer grid">
        <div class="shape-spacer-block">
            <img :src="src" alt="Spacer">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
    },
}
</script>

<style lang="scss">
.shape-spacer {
    &-block {
        margin: var(--space-medium) 0;
        grid-column-start: main-start;
        grid-column-end: main-end;
        text-align: center;

        img {
            max-width: 75%;
            max-height: var(--space-small);
        }

        path {
            fill: var(--color4);
        }
    }
}
</style>