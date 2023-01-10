<template>
  <div class="content-body d-flex flex-column align-center mt-4 noselect">
    <h1>Welcome!</h1>
    <span>I'm so glad you're here!</span>
    <div class="pool d-flex justify-center align-center">
      <v-img src="images\pool_water.jpg" class="pool d-flex justify-center align-center" @click="splash">
      <div class="affirmation">
        <div v-if="!affirmation"><p>Take a moment to splash around...</p><p style="font-size: 22px;">(Click the water to recieve an affirmation)</p></div>
        <p>{{ affirmation }}</p>
      </div>
    </v-img>
    </div>
    <my-footer class="home-footer"></my-footer>
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
      'In the long run, very little happens naturally.',
      'Our world comes just as much from the inside-out as the outside-in.',
      'The path to success is to take massive, determined action.',
      'I give myself permission to do what is right for me.',
      "I'm rooting for you.",
      "You're an inspiration.",
      'You are worthy and deserving of respect.',
      'Your mind is full of brilliant ideas.',
      'Give yourself the space to grow and learn.',
      'Reflect on what is truly fulfilling to you.',
      'Accept your emotions and let them serve their purpose.',
      'Save your energy for things that matter to you.',
      'You are becoming closer to your true self every day.',
      'Take time for peace.',
      'Take time for fun.',
      'Release self-criticism and choose self-love.',
      'You are brave.',
      'Let your spirit define you.',
      'Ask yourself: how can I experience the world better?',
      'Social friction is what advances civilization.',
      'Committing to a choice makes hard decisions easy.',
      'The desired outcome of a decision is up to you, not to the choice itself.',
      "We cannot make spaces FOR everyone if we aren't listening to everyone.",
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

<style lang="scss">
.home-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 897px) {
  .home-footer {
    position: fixed;
  }
}
</style>
