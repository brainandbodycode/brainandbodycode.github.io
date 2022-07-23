<template>
  <div class="pg-contact">
    <div class="grid">
      <h2 class="pg-contact-heading">Get in touch by filling out the form or contact us directly.</h2>
      <div class="pg-contact-info">
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Phone:</strong> {{ phone }}</p>
        <p><strong>Location:</strong> {{ location }}</p>
        <p>Our service is approximately 9 miles between the Spokane and Spokane Valley areas. Traveling outside of this
          perimeter will add a travel fee. </p>
      </div>
      <form class="pg-contact-form" @submit.prevent="onSubmit">
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
      <img class="pg-contact-map" src="/assets/img/contact-map.png" alt="Map" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  },
  methods: {
    onSubmit() {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss">
.pg-contact {
  .grid {
    grid-template-rows: [content-top] auto [content-mid] auto [content-bottom] 700px;
  }

  &-heading {
    grid-row: content-top;
    grid-column-start: main-start;
    grid-column-end: main-end;
    text-align: center;
  }

  &-info {
    grid-row: content-mid;
    grid-column-start: main-start;
    grid-column-end: col-start 7;
  }

  &-form {
    grid-row: content-mid;
    grid-column-start: col-start 7;
    grid-column-end: main-end;
    display: flex;
    flex-direction: column;

    input,
    textarea {
      width: 100%;
      box-sizing: border-box;
    }
  }

  &-map {
    grid-row: content-bottom;
    grid-column-start: main-start;
    grid-column-end: main-end;

    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-position: 50% 50%;
  }
}
</style>