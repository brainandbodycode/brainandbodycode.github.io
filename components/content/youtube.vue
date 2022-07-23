<template>
    <div class="youtube">
        <p class="h3">{{ title }}</p>
        <div class="youtube-container">
            <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${id}`" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
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

    &-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
    }


}
</style>