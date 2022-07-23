<template>
    <footer class="cfooter">
        <div class="grid">
            <div class="cfooter-contact">
                <strong>Brain and Body Therapy</strong>
                <p>Spokane, WA, 99206</p>
                <p>United States</p>
                <p>509-879-7363</p>
                <p>brainandbodytherapy@gmail.com</p>
                <strong class="cfooter-contact-copy">Copyright © 2021-2022 Brain and Body Therapy. All Rights Reserved.</strong>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.cfooter {
    width: 100%;
    background-color: var(--color3);
    padding: 30px 0;
    grid-row: content-footer;
    grid-column: content-main;
    position: relative;
    border-top: 1px solid var(--color1);

    &-contact {
        grid-column-start: main-start;
        grid-column-end: main-end;
        display: flex;
        flex-direction: column;

        p {
            margin: 0;
        }

        &-copy {
            margin-top: 30px;
        }
    }

}
</style>