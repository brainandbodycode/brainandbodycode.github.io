<template>
    <img class="rounded-img" :src="src" :alt="alt" />
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
        }
    },
}
</script>

<style lang="scss">
.rounded-img {
    border-radius: var(--border-radius);
}
</style>