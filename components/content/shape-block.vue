<template>
    <div class="shape-smile" :style="style">
        <img :src="src" alt="Spacer">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        centerX: {
            type: String,
            default: "true"
        },
        centerY: {
            type: String,
            default: "true"
        },
    },
    computed: {
        style() {
            const s = {}
            if (this.centerY === "true") {
                s["justifyContent"] = "center"
            }
            if (this.centerX === "true") {
                s["alignItems"] = "center"
            }
            return s
        }
    }
}
</script>

<style lang="scss">
.shape-smile {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    path {
        fill: var(--color1);
    }
}
</style>