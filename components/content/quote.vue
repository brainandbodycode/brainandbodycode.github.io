<template>
    <p class="quote col-3">
        <span>“</span>{{ quote }}<span>” - {{ name }}</span>
    </p>
</template>

<script>
export default {
    props: {
        quote: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>