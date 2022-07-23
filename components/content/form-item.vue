<template>
    <a :href="url" class="form-item" target="_blank" rel="noreferrer">
        <img :src="img" :alt="title">
        <strong>{{ title }}</strong>
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

<style>
.form-item {
    display: block;
}
</style>