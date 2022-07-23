<template>
    <nav class="cnav">
        <div class="grid">
            <a class="cnav-logo" href="/">
                <img src="/assets/img/header-logo.png" alt="Brain and Body Therapy" width="775" height="228" />
            </a>
            <ul>
                <li>
                    <nuxt-link to="/">HOME</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">CONTACT</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about-us">ABOUT US</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/book-now">BOOK NOW</nuxt-link>
                </li>
                <li class="cnav-extra">
                    <span>LEARN MORE</span>
                    <ul>
                        <li>
                            <nuxt-link to="/massage-types">TYPES OF MASSAGE/BODYWORK</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/blogs/mnri">MNRI</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/blog">BLOG</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/forms">FORMS</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss">
.cnav {
    width: 100%;
    grid-row: content-nav;
    grid-column: content-main;
    position: relative;
    padding: 20px 0 60px 0;

    &-logo {
        grid-column-start: main-start;
        grid-column-end: col-start 4;
        height: 100%;
        width: 100%;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            object-position: 50% 50%;
        }
    }

    ul {
        grid-column-start: col-start 4;
        grid-column-end: main-end;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: 700;

        li,
        a {
            margin: 0 10px;
            display: block;
        }

        .router-link-exact-active {
            text-decoration: underline;
        }
    }

    &-extra {
        position: relative;

        ul {
            display: none;
            position: absolute;
            top: 20px;
            right: 0;
            z-index: 10;
            background-color: rgba(255, 255, 255, 0.75);
        }
    }

    &-extra:hover {
        ul {
            display: block;
        }
    }
}
</style>