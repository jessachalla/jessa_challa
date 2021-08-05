<template>
  <div>
    <div>
      <v-card-title class="py-1 mx-6 d-flex justify-space-between align-center">
        <h1 class="font-weight-bold">
          <router-link
            :to="'/'"
            name="home"
            class="page-title home-active"
            style="text-decoration: none;"
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
      <v-list class="nav-bar">
        <router-link
          v-for="(item, i) in menu"
          :key="i"
          :to="item.path"
          active-class="active"
          :class="item.path === $route.path ? 'active' : ''"
          class="nav-links"
        >
          <span class="px-4 nav">{{ item.name }}</span>
        </router-link>
        <!-- <a
          v-for="(item, i) in menu"
          :key="i"
          :href="item.path"
          active-class="active"
          :class="item.path === $route.path ? 'active' : ''"
          class="nav-links"
        >
          <span class="px-4 nav">{{ item.name }}</span>
        </a> -->
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { name: 'About', path: '/about' },
      { name: 'Work', path: '/work' },
      { name: 'Community', path: '/community' },
      // { name: 'In the News', path: '/news' },
      { name: 'Contact', path: '/contact' }
    ]
  })
}
</script>

<style scoped lang="scss">
.active {
  border-bottom: 2px solid;
}
.nav:hover {
  color: #4da1a8;
}

.home-active {
  border-bottom: 2px solid white;
}
</style>
