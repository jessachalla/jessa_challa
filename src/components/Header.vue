<template>
  <div>
    <div>
      <v-card-title class="py-1 mx-6 d-flex justify-space-between align-center">
        <h1 class="font-weight-bold">
          <router-link :to="'/'" name="home" class="nav-links page-title"
            >jessa challa</router-link
          >
        </h1>
        <div class="ml-auto">
          <v-btn
            icon
            href="https://www.facebook.com/jessarosechalla/"
            target="_blank"
          >
            <v-icon size="24px" color="primary"> mdi-facebook </v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.linkedin.com/in/jessa-challa/"
            target="_blank"
          >
            <v-icon size="24px" color="primary"> mdi-linkedin </v-icon>
          </v-btn>
          <v-btn
            icon
            href="https://www.instagram.com/jesshollaatme/"
            target="_blank"
          >
            <v-icon size="24px" color="primary"> mdi-instagram </v-icon>
          </v-btn>
        </div>
      </v-card-title>
    </div>
    <div>
      <v-list class="nav-bar nav-text">
        <router-link
          v-for="(item, i) in menu"
          :key="i"
          :to="item.path"
          active-class="active"
          :class="item.path === $route.path ? 'active' : ''"
          class="nav-links"
        >
          <v-list-item class="px-8">{{ item.name }}</v-list-item>
        </router-link>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { name: 'About', path: '/about' },
      { name: 'Experience', path: '/experience' },
      { name: 'Community', path: '/community' },
      // { name: 'In the News', path: '/news' },
      { name: 'Contact', path: '/contact' }
    ]
  })
}
</script>

<style scoped lang="scss">
.active {
  color: #4da1a8;
  border-bottom: 2px solid;
}
</style>
