<template>
    <div class="about grid">
        <img class="about-img" src="/img/about-carla-neptune.jpeg" alt="Carla and Neptune" />
        <div class="about-about">
            <slot />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about {
    &-img {
        grid-column-start: main-start;
        grid-column-end: col-start 6;

        @include tablet {
            height: 400px;
            width: 100%;
            object-fit: cover;
            object-position: 50% 25%;
            grid-column-start: main-start;
            grid-column-end: main-end;
        }

        @include mobile {
            height: 300px;
        }
    }

    &-about {
        grid-column-start: col-start 6;
        grid-column-end: main-end;

        @include tablet {
            grid-column-start: main-start;
            grid-column-end: main-end;
        }
    }
}
</style>