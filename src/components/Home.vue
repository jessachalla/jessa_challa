<template>
  <div class="content-container">
    <v-card
      flat
      class="content-body d-flex flex-column align-center mt-4"
    >
      <h1>Welcome!</h1>
      <span>I'm so glad you're here!</span>
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
        <div class="affirmation">
          <p v-if="!affirmation">Take a moment to splash around...</p>
          <p>{{ affirmation }}</p>
        </div>
      </div>
    </v-card>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from '@/components/Footer'

export default {
  components: {
    MyFooter
  },
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
      'Take time for fun.',
      'Release self-criticism and choose self-love.',
      'You are brave.',
      'It is enough to do your best.',
      'You are powerful.',
      'You are amazing',
      'Little by little, you are becoming the person you want to be.'
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
