<template>
    <div class="full-title grid">
        <div class="col-12">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.full-title {
    text-align: center;

    .col-12 * {
        color: var(--color1);
    }
}
</style>