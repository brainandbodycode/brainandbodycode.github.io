<template>
    <article class="article grid">
        <content-doc v-slot="{ doc }">
            <h1 class="article-title">{{ doc.title }}</h1>
            <div class="article-content">
                <content-renderer :value="doc" />
            </div>
            <img class="article-img" :src="`/img/blog/${doc.img}`" :alt="doc.title" />
        </content-doc>
    </article>
</template>

<style lang="scss">
.article {
    .article-title {
        grid-column-start: main-start;
        grid-column-end: col-start 7;
    }

    .article-content {
        grid-column-start: main-start;
        grid-column-end: col-start 7;
    }

    .article-img {
        grid-column-start: col-start 7;
        grid-column-end: main-end;
        width: 100%;
        height: auto;
    }
}
</style>