<template>
    <img :src="src" :alt="alt" :style="style" />
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        left: {
            type: Boolean,
            default: false
        },
        width: {
            type: [String, undefined],
            default: undefined
        },
        alt: {
            type: String,
            default: ''
        }
    },
    computed: {
        style() {
            const margin = this.left
                ? "0 40px 0 0"
                : "0 0 0 40px";
            return {
                float: this.left ? "left" : "right",
                margin,
                maxWidth: this.width
            }
        }
    }
}
</script>

<style lang="scss">
.spacer {
    grid-column-start: main-start;
    grid-column-end: main-end;
}
</style>