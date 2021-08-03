<template>
  <v-container>
    <a :href="link">{{ linkText }}</a>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: 'https://arcg.is/1viKzz0',
    linkText: 'Grand Rapids Area Minority Owned Businesses',
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4'
    ],
    slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
  })
}
</script>
