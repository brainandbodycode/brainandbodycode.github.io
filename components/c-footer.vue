<template>
    <footer class="cfooter">
        <div class="grid">
            <div class="cfooter-contact">
                <span>Brain and Body Therapy</span>
                <span>Spokane, WA, 99206,</span>
                <span>United States</span>
                <span>5098797363</span>
                <span>brainandbodytherapy@gmail.com</span>
                <div class="cfooter-contact-social">
                    <a href="https://www.instagram.com/brainandbodytherapy/" rel="noreferrer" target="_blank">
                        <img src="/img/icon-ig.svg" alt="Visit Brain and Body Therapy's Instagram" width="32"
                            height="32">
                    </a>
                    <a href="https://fb.me/brainandbodytherapy" rel="noreferrer" target="_blank">
                        <img src="/img/icon-fb.svg" alt="Visit Brain and Body Therapy's Facebook" width="32"
                            height="32">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.cfooter {
    width: 100%;
    background-color: var(--black);
    color: var(--grey);
    padding: 30px 0;
    grid-row: content-footer;
    grid-column: content-main;
    position: relative;

    &-contact {
        grid-column-start: main-start;
        grid-column-end: col-start 5;
        display: flex;
        flex-direction: column;

        &-social {
            display: flex;
            flex-direction: row;
            align-items: center;

            a>img {
                width: 40px;
                height: auto;
                border-radius: 3px;
                margin: 5px 5px 0 0;
            }

        }
    }


}
</style>