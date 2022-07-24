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

    &-quotebefore,
    &-quoteafter {
        position: relative;
    }

    &-quotebefore::before,
    &-quoteafter::after {
        position: absolute;
    }

    &-quotebefore::before {
        content: url(/img/shapes/star.svg);
        transform: scale(0.3333);
        top: -34px;
        left: -38px;
    }

    &-name {
        font-weight: 700;
        color: var(--color1);
    }
}
</style>