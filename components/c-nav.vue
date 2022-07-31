<template>
    <div class="cnav">
        <nav class="cnav-content spacer">
            <div class="grid">
                <div class="cnav-content-logo">
                    <img class="logo-desktop" src="/img/header-logo.png" alt="Brain and Body Therapy desktop logo"
                        width="775" height="228" />
                    <img class="logo-mobile" src="/img/header-logo-mobile.png" alt="Brain and Body Therapy mobile logo"
                        width="775" height="228" />
                </div>
            </div>
        </nav>
        <nav class="cnav-content">
            <div class="grid">
                <nuxt-link class="cnav-content-logo" to="/">
                    <img class="logo-desktop" src="/img/header-logo.png" alt="Brain and Body Therapy desktop logo"
                        width="775" height="228" />
                    <img class="logo-mobile" src="/img/header-logo-mobile.png" alt="Brain and Body Therapy mobile logo"
                        width="775" height="228" />
                </nuxt-link>
                <ul class="cnav-content-list">
                    <li class="services-desktop">
                        <nuxt-link to="/">Services</nuxt-link>
                    </li>
                    <li class="about-us-desktop">
                        <nuxt-link to="/about-us">About Us</nuxt-link>
                    </li>
                    <li class="cnav-content-list-extra">
                        <span>Learn More</span>
                        <ul>
                            <li class="services-mobile">
                                <nuxt-link to="/">Services</nuxt-link>
                            </li>
                            <li class="about-us-mobile">
                                <nuxt-link to="/about-us">About Us</nuxt-link>
                            </li>
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
                    <li class="cnav-content-list-cta ctabtn">
                        <nuxt-link to="/book-now">Book Now</nuxt-link>
                    </li>
                    <li class="cnav-content-list-social">
                        <a class="cnav-content-list-social-ig" href="https://www.instagram.com/brainandbodytherapy/"
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

    &-content.spacer {
        position: relative;
        visibility: hidden;
    }

    &-content {
        top: 0;
        position: fixed;
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.95);
        width: 100%;
        padding: var(--space-extra-small) 0 var(--space-extra-small) 0;

        &-logo {
            grid-column-start: main-start;
            grid-column-end: col-start 4;
            height: 100%;
            width: 100%;

            @include tablet {
                grid-column-start: main-start;
                grid-column-end: col-start 6;
            }

            @include mobile {
                grid-column-start: main-start;
                grid-column-end: col-start 4;
            }

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                object-position: 50% 50%;

                @include mobile {
                    max-height: 60px;
                    object-position: 0% 50%;
                }
            }
        }




        &-list {
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

            @include tablet {
                grid-column-start: col-start 6;
                grid-column-end: main-end;
            }

            @include mobile {
                grid-column-start: col-start 4;
                grid-column-end: main-end;
            }

            li {
                display: flex;
                flex-direction: row;
                margin: var(--space-extra-small) var(--space-extra-small);
            }

            a {
                padding: var(--space-extra-small) 0px;
                width: 100%;
                height: 100%;
                display: inline-flex;
            }

            .router-link-exact-active {
                text-decoration: underline;
            }

            &-social {
                &-ig {
                    margin-right: 5px;
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
                    padding: 0 var(--space-extra-small);
                }
            }

            &-extra:hover {
                ul {
                    display: block;
                }
            }
        }

    }

    .cnav-content-list-social {
        @include tablet {
            display: none;
        }
    }

    .services-desktop {
        @include mobile {
            display: none;
        }
    }

    .services-mobile {
        display: none;

        @include mobile {
            display: block;
        }
    }

    .about-us-desktop {
        @include tablet {
            display: none;
        }
    }

    .about-us-mobile {
        display: none;

        @include tablet {
            display: block;
        }
    }

    .logo-desktop {
        @include mobile {
            display: none;
        }
    }

    .logo-mobile {
        display: none;

        @include mobile {
            display: block;
        }
    }
}
</style>