<template>
  <div class="content-container">
    <v-card
      flat
      class="content-body d-flex flex-column align-center justify-center"
    >
      <h1>Welcome!</h1>
      I am glad you are here! Take time to splash around...
      <div
        @click="splash"
        class="
          pool
          d-flex
          flex-column
          justify-center
          align-center align-self-center
        "
      >
        <div class="affirmation">{{ affirmation }}</div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    affirmation: '',
    affirmations: [
      'Small progress is still progress.',
      'The path to success is to take massive, determined action.',
      'I give myself permission to do what is right for me.',
      'It is not a sprint, it is a marathon. One step at a time.',
      "I'm rooting for you.",
      "You're an inspiration.",
      'You are worthy and deserving of respect.',
      'Life happens.',
      'Your mind is full of brilliant ideas.',
      'Give yourself the space to grow and learn.',
      'Reflect on what is truely fulfilling to you.',
      'Accept your emotions and let them serve their purpose.',
      'Save your energy for things that matter to you.',
      'You are becoming closer to your true self every day.',
      'Take time for peace.',
      'Take time for fun.'
    ]
  }),
  methods: {
    splash () {
      var affirmation =
        this.affirmations[Math.floor(Math.random() * this.affirmations.length)]
      this.affirmation = affirmation
    }
  }
}
</script>
