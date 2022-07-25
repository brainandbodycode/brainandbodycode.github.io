<template>
    <div class="massage-type">
        <div class="grid">
            <div class="massage-type-content" :class="{ flip: flip }">
                <h1>{{ title }}</h1>
                <slot />
            </div>
            <img class="massage-type-img" :class="{ flip: flip }" :src="`${img}`" :alt="title" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        flip: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="scss">
.massage-type {
    grid-template-rows: [content] auto;

    @include tablet {
        grid-template-rows: auto;
    }

    &-content {
        position: relative;
        grid-column-start: main-start;
        grid-column-end: col-start 6;
        grid-row: content;

        @include tablet {
            grid-column-start: main-start;
            grid-column-end: main-end;
            grid-row: 2;
        }
    }

    &-content::before {
        position: absolute;
        content: url(/img/shapes/star.svg);
        transform: scale(0.3333);
        top: -26px;
        left: -34px;
    }

    &-content.flip {
        grid-column-start: col-start 8;
        grid-column-end: main-end;

        @include tablet {
            grid-column-start: main-start;
            grid-column-end: main-end;
            grid-row: 2;
        }
    }

    &-img {
        grid-column-start: col-start 6;
        grid-column-end: main-end;
        grid-row: content;
        width: 100%;
        height: auto;
        border-radius: var(--border-radius);

        @include tablet {
            height: 300px;
            object-fit: cover;
            object-position: 50% 50%;
            grid-column-start: main-start;
            grid-column-end: main-end;
            grid-row: 1;
            margin-bottom: 10px;
        }
    }

    &-img.flip {
        grid-column-start: main-start;
        grid-column-end: col-start 8;

        @include tablet {
            grid-column-start: main-start;
            grid-column-end: main-end;
            grid-row: 1;
        }
    }
}
</style>