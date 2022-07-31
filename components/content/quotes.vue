<template>
    <div class="quotes grid">
        <div class="quotes-quotes">
            <slot />
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
        grid-column-end: col-start 10;
        grid-row: 1;
        @include tablet {
            grid-column-end: main-end;
        }
    }
}
</style>