<template>
    <article class="article">
        <!-- <content-doc v-slot="{ doc }"> -->
        <!-- <h1 class="article-title">{{ doc.title }}</h1>
            <div class="article-content">
                <content-renderer :value="doc" />
            </div>
            <img class="article-img" :src="`${doc.img}`" :alt="doc.title" /> -->
        <!-- <div class="article-content">
                <content-renderer :value="doc" />
            </div>
        </content-doc> -->
        <content-doc />
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
        grid-column-end: col-start 8;
        grid-row: content-main;
    }

    .article-img {
        grid-column-start: col-start 8;
        grid-column-end: main-end;
        grid-row: content-main;
        width: 100%;
        height: auto;
        margin-top: 20px;
    }
}
</style>