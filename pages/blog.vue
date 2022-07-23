<template>
  <div class="grid">
    <content-list path="/blogs" v-slot="{ list }">
      <col-3 class="pg-blog-item" v-for="blog in list" :key="blog._path">
        <blog-preview :path="blog._path" :title="blog.title" :img="blog.img" />
      </col-3>
    </content-list>
  </div>
</template>
