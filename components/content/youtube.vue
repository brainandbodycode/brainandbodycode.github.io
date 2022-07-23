<template>
    <div class="youtube">
        <h5>{{ title }}</h5>
        <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${id}`" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.youtube {
    display: flex;
    flex-direction: column;

    iframe {
        width: 100%;
    }
}
</style>