<template>
    <div class="pg-forms-item">
        <img :src="img" :alt="title">
        <a :href="url">{{title}}</a>
    </div>
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