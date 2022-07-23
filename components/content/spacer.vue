<template>
    <div class="spacer" :style="{ height: `var(${size})` }" />
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            required: true
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