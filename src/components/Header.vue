<template>
  <div>
    <v-card-title class="py-1 mx-6 d-flex justify-space-between align-center">
      <h1 class="font-weight-bold">
        <router-link :to="'/'" name="home" class="nav-links page-title"
          >jessa challa</router-link
        >
      </h1>
      <v-list class="nav-bar nav-text">
        <router-link
          :to="'/introduction'"
          name="introduction"
          class="nav-links"
        >
          <v-list-item class="px-8">Introduction</v-list-item>
        </router-link>
        <router-link :to="'/experience'" name="experience" class="nav-links">
          <v-list-item class="px-8"> Experience </v-list-item>
        </router-link>
        <router-link :to="'/gallery'" name="gallery" class="nav-links">
          <v-list-item class="px-8">Gallery</v-list-item>
        </router-link>
        <router-link :to="'/news'" name="news" class="nav-links">
          <v-list-item class="px-8">In the News</v-list-item>
        </router-link>
        <router-link :to="'/contact'" name="contact" class="nav-links">
          <v-list-item class="px-8">Contact</v-list-item>
        </router-link>
      </v-list>
      <div>
        <v-btn v-for="icon in icons" :key="icon" icon>
          <v-icon size="24px" color="orange">
            {{ icon }}
          </v-icon>
        </v-btn>
      </div>
    </v-card-title>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
}
</script>

<style scoped lang="scss">
</style>
