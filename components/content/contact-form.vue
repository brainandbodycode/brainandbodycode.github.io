<template>
    <div class="grid" ref="contact">
        <div class="contact-form">
            <h2 v-if="!submitted" class="contact-heading">Lets start our conversation</h2>
            <div v-if="submitted">
                <h2>Thank you for you submission.</h2>
                <p>We will get back to you shortly.</p>
            </div>
            <form v-else ref="form" class="contact-form-form" @submit.prevent="onSubmit">
                <label for="fname">
                    <span>First Name</span>
                    <input type="text" name="fname" placeholder="First name" required>
                </label>
                <label for="lname">
                    <span>Last Name</span>
                    <input type="text" name="lname" placeholder="Last name" required>
                </label>
                <label for="email">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Email" required>
                </label>
                <label for="subject">
                    <span>Subject</span>
                    <input type="text" name="subject" placeholder="Subject" required>
                </label>
                <label for="travel">
                    <span>What area will we be traveling to?</span>
                    <input type="text" name="travel"
                        placeholder="Downtown Spokane, Spokane Valley, Deer Park, Liberty Lake" required>
                </label>
                <label for="message">
                    <span>Message</span>
                    <textarea required name="message" cols="30" rows="10"
                        placeholder="I would like more information on how to relieve tension, help my kiddo, receive an in-home massage…"></textarea>
                </label>
                <button type="submit" :disabled="loading">
                    <span v-if="loading">Sending Message</span>
                    <span v-else>Send Message</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            submitted: false,
        }
    },
    methods: {
        async onSubmit() {
            this.loading = true;
            const formElem = this.$refs.form;
            let response = await fetch('https://script.google.com/macros/s/AKfycbwayz36om-CC08N2L3gMvb8aFx2q7j75VCIT4MgRbOnkPSITC8UCNKiC0EotFF6WNJa/exec', {
                method: 'POST',
                body: new FormData(formElem)
            });

            let result = await response.json();
            if (result.result === 'success') {
                this.submitted = true;
            } else {
                this.loading = false;
            }
        }
    },
}
</script>

<style lang="scss">
.contact-heading {
    position: relative;
}

.contact-form {
    grid-column-start: main-start;
    grid-column-end: col-start 10;

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

        button {
            background-color: var(--color4);
        }
    }
}
</style>