<script setup>
const { data } = await useAsyncData('blogs', () => queryContent('/blogs').find())
const results = data.value
</script>

<template>
    <div class="pg-search grid">
        <col-3 class="pg-blog-item" v-for="result in results" :key="result._path">
            <blog-preview :path="result._path" :title="result.title" :img="result.img" />
        </col-3>
    </div>
</template>
