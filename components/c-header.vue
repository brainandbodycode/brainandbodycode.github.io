<template>
    <header class="cheader">
        <div class="grid">
            <a class="cheader-logo" href="/">
                <img src="/assets/img/header-logo.png" alt="Brain and Body Therapy" width="800" height="400" />
            </a>
            <form class="cheader-search" @submit.prevent="onSubmit">
                <input type="search" placeholder="Search" v-model="search" />
            </form>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        }
    },
    methods: {
        onSubmit() {
            if (this.search && this.search.length) {
                this.$router.push({
                    path: `/search?keyword=${this.search}`
                })
            }
        }
    },
    created() {
        this.search = this.$route.query.keyword ?? ""
    },
    watch: {
        async $route() {
            const query = this.$route.query
            this.search = query.keyword ?? ""
        },
    }
}
</script>

<style lang="scss">
.cheader {
    width: 100%;
    padding: 20px 0;
    grid-row: content-header;
    grid-column: content-main;
    position: relative;

    .grid {
        align-items: center;
    }

    &-logo {
        grid-column-start: main-start;
        grid-column-end: col-start 4;

        img {
            width: 100%;
            height: auto;
        }
    }

    &-search {
        grid-column-start: col-start 9;
        grid-column-end: main-end;
        height: 50px;

        input {
            width: 100%;
            height: 100%;
        }
    }
}
</style>