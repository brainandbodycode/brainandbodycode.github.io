<template>
    <div class="quotes grid">
        <div class="quotes-quotes">
            <slot />
        </div>
        <div class="quotes-arrows">
            <!-- <shape-block src="/img/shapes/arrow-heart-left.svg" centerX="false" centerY="false" /> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.quotes {
    &-quotes {
        grid-column-start: main-start;
        grid-column-end: col-start 8;
        grid-row: 1;
        @include tablet {
            grid-column-end: main-end;
        }
    }

    &-arrows {
        grid-column-start: col-start 8;
        grid-column-end: main-end;
        grid-row: 1;
        @include tablet {
            display: none;
        }
    }
}
</style>