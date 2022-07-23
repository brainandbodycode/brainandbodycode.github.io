<template>
    <section class="s-item grid">
        <img class="s-item-img" :class="{ flip: flip }" :src="src" alt="">
        <div class="s-item-content" :class="{ flip: flip }">
            <div class="s-item-content-title">
                <h1>{{ title }}</h1>
                <ul v-if="prices.length">
                    <li v-for="(price, index) in prices" :key="index">{{ price }}</li>
                </ul>
            </div>
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        flip: {
            type: Boolean,
            default: false
        },
        prices: {
            type: Array,
            default: () => []
        },
    }
}
</script>

<style lang="scss">
.s-item {
    --golden-inverse: 0.618;
    --content-height: 100px;
    min-height: var(--content-height);
    grid-template-rows: [content-top] 60px [content-overlap] 500px [content-bottom] auto;
    align-items: stretch;
    padding: 40px 0;

    &-img {
        grid-column-start: col-start 6;
        grid-column-end: main-end;
        grid-row: content-top / span 2;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        z-index: 1;
        border-radius: 5px;
    }

    &-img.flip {
        grid-column-start: main-start;
        grid-column-end: col-start 7;
    }

    &-content {
        grid-column-start: main-start;
        grid-column-end: col-start 8;
        grid-row: content-overlap / span 2;
        display: block;
        background-color: var(--color3);
        padding: 20px 20px;
        z-index: 2;
        // color: var(--white);
        border-radius: 5px;
        // border: 5px solid #fff;
        box-shadow:
            0 0 0 5px #fff,
            0 0 0 6px var(--color3);

        a {
            background-color: var(--white);
            padding: 10px 10px;
            width: 240px;
            text-align: center;
            border-radius: 5px;
            font-weight: 700;
            margin-top: 10px;
            box-sizing: border-box;
            display: inline-block;
        }

        &-title {
            display: flex;
            flex-direction: column;

            h1 {
                margin-bottom: 0;
            }

            ul,
            li {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            ul {
                display: flex;
                flex-direction: column;
            }

            li {
                font-weight: 700;
            }
        }
    }

    &-content.flip {
        grid-column-start: col-start 5;
        grid-column-end: main-end;
    }
}
</style>