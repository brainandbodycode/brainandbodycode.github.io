<template>
    <nav class="cnav">
        <div class="grid">
            <nuxt-link class="cnav-logo" to="/">
                <img src="/img/header-logo.png" alt="Brain and Body Therapy" width="775" height="228" />
            </nuxt-link>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about-us">About Us</nuxt-link>
                </li>
                <li class="cnav-extra">
                    <span>Learn More</span>
                    <ul>
                        <li>
                            <nuxt-link to="/massage-types">Massage Types</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/blogs/mnri">MNRI</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/blog">Blog</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="cnav-cta">
                    <nuxt-link to="/book-now">Book Now</nuxt-link>
                </li>
                <li>
                    <a class="cnav-ig" href="https://www.instagram.com/brainandbodytherapy/" rel="noreferrer"
                        target="_blank">
                        <img src="/img/icon-ig.svg" alt="Visit Brain and Body Therapy's Instagram" width="32"
                            height="32">
                    </a>
                    <a href="https://fb.me/brainandbodytherapy" rel="noreferrer" target="_blank">
                        <img src="/img/icon-fb.svg" alt="Visit Brain and Body Therapy's Facebook" width="32"
                            height="32">
                    </a>
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
    padding: 20px 0 20px 0;



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

    &-ig {
        margin-right: 5px;
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

        li {
            display: flex;
            flex-direction: row;
            margin: 0 10px;
        }

        .cnav-cta a {
            background-color: var(--color4);
            padding: 10px 20px;
            border-radius: 5px;
        }

        a {
            padding: 10px 0px;
            width: 100%;
            height: 100%;
            display: inline-flex;
        }

        .router-link-exact-active {
            text-decoration: underline;
        }
    }

    &-extra {
        position: relative;
        cursor: default;

        ul {
            display: none;
            position: absolute;
            top: 25px;
            left: 50%;
            z-index: 10;
            background-color: var(--white);
            transform: translate(-50%, 0);
            border-radius: 5px;
            border: 1px solid var(--color3);
            width: 200px;
            padding: 0 5px;
        }
    }

    &-extra:hover {
        ul {
            display: block;
        }
    }
}
</style>