<template>
  <div class="pg-blog grid">
    <content-list path="/blogs" v-slot="{ list }">
      <div class="pg-blog-item span-4" v-for="blog in list" :key="blog._path">
        <blog-preview :path="blog._path" :title="blog.title" :img="blog.img" />
      </div>
    </content-list>
  </div>
</template>

<style lang="scss">
.pg-blog {
  row-gap: 30px;
}
</style>