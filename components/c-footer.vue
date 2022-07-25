<template>
    <footer class="cfooter">
        <div class="grid">
            <div class="cfooter-contact">
                <p class="h3">Brain and Body Therapy</p>
                <p>Spokane, WA, 99206</p>
                <p>United States</p>
                <p><a href="tel:509-879-7363">509-879-7363</a></p>
                <p><a href="mailto:brainandbodytherapy@gmail.com">brainandbodytherapy@gmail.com</a></p>
                <div class="cfooter-contact-social">
                    <a class="cnav-content-ig" href="https://www.instagram.com/brainandbodytherapy/" rel="noreferrer"
                        target="_blank">
                        <img src="/img/icon-ig-light.svg" alt="Visit Brain and Body Therapy's Instagram" width="32"
                            height="32">
                    </a>
                    <a href="https://fb.me/brainandbodytherapy" rel="noreferrer" target="_blank">
                        <img src="/img/icon-fb-light.svg" alt="Visit Brain and Body Therapy's Facebook" width="32"
                            height="32">
                    </a>
                </div>
                <p class="cfooter-contact-copy">Copyright © 2021-2022 Brain and Body Therapy. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.cfooter {
    width: 100%;
    background-color: var(--color1);
    padding: 30px 0;
    grid-row: content-footer;
    grid-column: content-main;
    position: relative;

    &-contact {
        grid-column-start: main-start;
        grid-column-end: main-end;
        display: flex;
        flex-direction: column;

        .h3 {
            margin-bottom: 20px;
        }

        p {
            margin: 0;
        }

        &-copy {
            font-size: 12px;
            padding-top: 10px;
        }

        &-social {
            margin-top: 20px;

            a {
                margin-right: 10px;
            }
        }
    }

}
</style>