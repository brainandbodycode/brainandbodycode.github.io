<template>
  <div>

    <Head>
      <Title>Blog</Title>
    </Head>
    <grid-1>
      <h1>The Blog</h1>
    </grid-1>
    <div class="blogs grid">
      <content-list path="/blogs" v-slot="{ list }">
        <div class="span-4" v-for="blog in list" :key="blog._path">
          <blog-preview :path="blog._path" :title="blog.title" :img="blog.img" />
        </div>
      </content-list>
    </div>
    <spacer size="--space-medium" />
  </div>

</template>

<style lang="scss">
.blogs {
  row-gap: 30px;
}
</style>

