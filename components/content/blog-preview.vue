<template>
    <nuxt-link class="blogpreview" :to="path">
        <img :src="`${img}`" :alt="title" placeholder />
        <p class="h4">{{ title }}</p>
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
        height: 300px;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: var(--border-radius);
    }

    p {
        margin: 10px 0 0 0;
    }
}
</style>