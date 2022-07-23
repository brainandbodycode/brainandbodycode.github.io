<template>
    <p class="quote">
        <span><span class="quote-quotebefore" />{{ quote }}<span class="quote-quoteafter" /></span>
        <span class="quote-name">{{ name }}</span>
    </p>
</template>

<script>
export default {
    props: {
        quote: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.quote {
    display: flex;
    flex-direction: column;
    &-quotebefore, &-quoteafter {
        position: relative;
    }
    &-quotebefore::before {
        content: '“';
        position: absolute;
        top: -8px;
        left: -12px;
        font-size: 1.25em;
    }
    &-quoteafter::after {
        content: '”';
        position: absolute;
        top: -8px;
        right: -12px;
        font-size: 1.25em;
    }
    &-name {
        font-weight: 700;
    }
}
</style>