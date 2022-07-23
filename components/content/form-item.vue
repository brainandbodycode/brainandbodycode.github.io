<template>
    <a :href="url" class="form-item" target="_blank" rel="noreferrer">
        <img :src="`${img}`" :alt="title" />
        <p class="h4">{{ title }}</p>
    </a>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },
}
</script>

<style lang="scss">
.form-item {
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 5px;
    }

    p {
        margin: 10px 0 0 0;
    }
}
</style>