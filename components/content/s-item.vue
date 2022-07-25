<template>
    <section class="s-item grid">
        <img class="s-item-img" :class="{ flip: flip }" :src="src" alt="">
        <div class="s-item-content" :class="{ flip: flip }">
            <div class="s-item-content-title">
                <h1>{{ title }}</h1>
                <ul v-if="prices.length">
                    <li v-for="(price, index) in prices" :key="index"><strong>{{ price }}</strong></li>
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
    grid-template-rows: [content] auto;
    align-items: stretch;

    @include tablet {
        grid-template-rows: [image] 200px [content] auto;
    }

    &-img {
        grid-column-start: col-start 7;
        grid-column-end: main-end;
        grid-row: content;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: var(--border-radius);
        max-height: 400px;

        @include tablet {
            grid-column-start: main-start;
            grid-column-end: main-end;
            grid-row: image;
        }
    }



    &-img.flip {
        grid-column-start: main-start;
        grid-column-end: col-start 6;

        @include tablet {
            grid-column-start: main-start;
            grid-column-end: main-end;
            grid-row: image;
        }
    }

    &-content {
        grid-column-start: main-start;
        grid-column-end: col-start 7;
        grid-row: content;
        display: block;
        position: relative;

        @include tablet {
            grid-column-start: main-start;
            grid-column-end: main-end;
            grid-row: content;
            margin-top: 15px;
        }

        a {
            background-color: var(--color4);
            padding: 10px 10px;
            width: 240px;
            text-align: center;
            border-radius: var(--border-radius);
            font-weight: 700;
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
        }
    }

    &-content::before {
        position: absolute;
        // content: url(/img/shapes/star.svg);
        transform: scale(0.06);
        transform-origin: 0 0;
        top: 20px;
        left: -30px;
    }

    &-content.flip {
        grid-column-start: col-start 6;
        grid-column-end: main-end;

        @include tablet {
            grid-column-start: main-start;
            grid-column-end: main-end;
            grid-row: content;
        }
    }
}
</style>