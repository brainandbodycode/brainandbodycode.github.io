<template>
    <article class="article">
        <content-doc>
            <template #not-found>
                <div></div>
            </template>
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

