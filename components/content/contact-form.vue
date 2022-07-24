<template>
    <form class="contact-form" @submit.prevent="onSubmit">
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
            <input type="text" name="travel" placeholder="Downtown Spokane, Spokane Valley, Deer Park, Liberty Lake">
        </label>
        <label for="message">
            <span>Message</span>
            <textarea name="message" cols="30" rows="10"
                placeholder="I would like more information on how to relieve tension, help my kiddo, receive an in-home massage…"></textarea>
        </label>
    </form>
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
.contact-form {
    display: flex;
    flex-direction: column;
    // background-color: var(--white);
    // border: 1px solid var(--black);
    border-radius: var(--border-radius);
    // padding: 20px;

    input,
    textarea {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>