<template>
    <article class="article grid">
        <content-doc v-slot="{ doc }">
            <h1 class="article-title">{{ doc.title }}</h1>
            <div class="article-content">
                <content-renderer :value="doc" />
            </div>
            <img class="article-img" :src="`${doc.img}`" :alt="doc.title" />
        </content-doc>
    </article>
</template>

<style lang="scss">
.article {
    grid-template-rows: [content-title] auto [content-main] auto;
    .article-title {
        grid-column-start: main-start;
        grid-column-end: main-end;
        grid-row: content-title;
    }

    .article-content {
        grid-column-start: main-start;
        grid-column-end: col-start 7;
        grid-row: content-main;
    }

    .article-img {
        grid-column-start: col-start 7;
        grid-column-end: main-end;
        grid-row: content-main;
        width: 100%;
        height: auto;
    }
}
</style>