<template>
    <div class="grid">
        <div class="span-gold" :class="{ flip: flip }">
            <slot name="left"></slot>
        </div>
        <div class="span-gold" :class="{ flip: flip }">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        flip: {
            type: Boolean,
            default: false
        },
    },
}
</script>