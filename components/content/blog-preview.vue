<template>
    <nuxt-link class="blogpreview" :to="path">
        <img :src="`${img}`" :alt="title" />
        <p>{{ title }}</p>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss">
.blogpreview {
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: 50% 50%;
    }

    p {
        margin: 0;
    }
}
</style>