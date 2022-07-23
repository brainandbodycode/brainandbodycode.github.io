<template>
  <div class="grid">
    <content-list path="/blogs" v-slot="{ list }">
      <div class="pg-blog-item" v-for="blog in list" :key="blog._path">
        <blog-preview :path="blog._path" :title="blog.title" :img="blog.img" />
      </div>
    </content-list>
  </div>
</template>
