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
        margin: 40px 0;
        grid-column-start: main-start;
        grid-column-end: main-end;
        text-align: center;

        path {
            fill: var(--color4);
        }
    }
}
</style>