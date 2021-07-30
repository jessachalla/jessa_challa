<template>
  <div>
    <v-card-title class="py-1 mx-6 d-flex justify-space-between">
      <h1 class="font-weight-bold">
        <router-link :to="'/'" name="home" class="nav-links page-title">jessa challa</router-link>
      </h1>
      <div>
        <v-btn v-for="icon in icons" :key="icon" icon>
          <v-icon size="24px" color="orange">
            {{ icon }}
          </v-icon>
        </v-btn>
      </div>
    </v-card-title>

    <v-list class="nav-bar">
      <router-link :to="'/introduction'" name="introduction" class="nav-links">
        <v-list-item> Introduction </v-list-item>
      </router-link>
      <router-link :to="'/experience'" name="experience" class="nav-links">
        <v-list-item> Experience </v-list-item>
      </router-link>
      <router-link :to="'/gallery'" name="gallery" class="nav-links">
        <v-list-item> Gallery </v-list-item>
      </router-link>
      <router-link :to="'/news'" name="news" class="nav-links">
        <v-list-item> In the News </v-list-item>
      </router-link>
      <router-link :to="'/contact'" name="contact" class="nav-links">
        <v-list-item> Contact </v-list-item>
      </router-link>
    </v-list>
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
