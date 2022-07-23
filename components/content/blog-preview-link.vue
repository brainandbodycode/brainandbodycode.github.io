<template>
    <div>
        <content-doc :path="path" v-slot="{ doc }">
            <blog-preview :path="doc._path" :title="doc.title" :img="doc.img" />
        </content-doc>
    </div>
</template>


<script>
export default {
    props: {
        path: {
            type: String,
            required: true
        },
    }
}
</script>