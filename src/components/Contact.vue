<template>
  <v-container>
    <h1>Contact Form</h1>

    <form method="post" action="#">
      <div>
        <label for="name">Name</label>
        <v-input name="name" id="name" v-model="name"></v-input>
      </div>
      <div>
        <label for="email">Email</label>
        <v-input name="email" id="email" v-model="email"></v-input>
      </div>
      <div>
        <label for="message">Message</label>
        <v-textarea name="message" id="message" v-model="message"></v-textarea>
      </div>
    </form>

    <h2>Form Details</h2>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    message: ''
  })
}
</script>
