<template>
    <div class="cnav">
        <div class="cnav-spacer" />
        <nav class="cnav-content">
            <div class="cnav-content-spacer" />
            <div class="grid">
                <nuxt-link class="cnav-content-logo" to="/">
                    <img src="/img/header-logo.png" alt="Brain and Body Therapy" width="775" height="228" />
                </nuxt-link>
                <ul>
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about-us">About Us</nuxt-link>
                    </li>
                    <li class="cnav-content-extra">
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
                    <li class="cnav-content-cta">
                        <nuxt-link to="/book-now">Book Now</nuxt-link>
                    </li>
                    <li>
                        <a class="cnav-content-ig" href="https://www.instagram.com/brainandbodytherapy/"
                            rel="noreferrer" target="_blank">
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
    </div>
</template>

<style lang="scss">
.cnav {
    display: grid;
    grid-column: content-main;
    grid-row: content-nav;

    &-spacer {
        height: 100px;

        @media only screen and (max-width: 1024px) {
            height: 70px;
        }
    }


    &-content {
        top: 0;
        position: fixed;
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.95);
        width: 100%;
        padding: 5px 0 5px 0;
        box-shadow: 0px 1px 3px #00000011;

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
                border-radius: var(--border-radius);
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
                border-radius: var(--border-radius);
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
}
</style>