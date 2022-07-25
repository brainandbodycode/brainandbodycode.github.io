<template>
    <div class="grid">
        <div class="contact-form">
            <h2 class="contact-heading">Lets start our conversation</h2>
            <form class="contact-form-form" @submit.prevent="onSubmit">
                <label for="fname">
                    <span>First Name</span>
                    <input type="text" name="fname" placeholder="First name">
                </label>
                <label for="lname">
                    <span>Last Name</span>
                    <input type="text" name="lname" placeholder="Last name">
                </label>
                <label for="email">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Email">
                </label>
                <label for="subject">
                    <span>Subject</span>
                    <input type="text" name="subject" placeholder="Subject">
                </label>
                <label for="travel">
                    <span>What area will we be traveling to?</span>
                    <input type="text" name="travel"
                        placeholder="Downtown Spokane, Spokane Valley, Deer Park, Liberty Lake">
                </label>
                <label for="message">
                    <span>Message</span>
                    <textarea name="message" cols="30" rows="10"
                        placeholder="I would like more information on how to relieve tension, help my kiddo, receive an in-home massage…"></textarea>
                </label>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onSubmit() {
            console.log('submit')
        }
    }
}
</script>

<style lang="scss">
.contact-heading {
    position: relative;
}

.contact-form {
    grid-column-start: main-start;
    grid-column-end: col-start 8;

    @include tablet {
        grid-column-end: main-end;
    }

    &-form {
        display: flex;
        flex-direction: column;
        border-radius: var(--border-radius);

        input,
        textarea {
            width: 100%;
            box-sizing: border-box;
        }
    }
}
</style>