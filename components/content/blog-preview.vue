<template>
    <nuxt-link class="blogpreview" :to="path">
        <img :src="`/img/blog/${img}`" :alt="title" />
        <span>{{ title }}</span>
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
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: auto;
    }
}
</style>