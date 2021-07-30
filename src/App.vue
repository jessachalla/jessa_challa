<template>
  <v-app>
    <div v-if="user" class="content-container">
      <my-header></my-header>
      <v-main>
        <router-view></router-view>
      </v-main>
      <v-footer class="d-flex justify-center">
        <div>
          {{ new Date().getFullYear() }} — <strong>jessa challa</strong>
        </div>
      </v-footer>
    </div>
    <loading v-else class="loading-container"></loading>
  </v-app>
</template>

<script>
import MyHeader from '@/components/Header'
import Loading from '@/components/Loading'
import router from './router.js'

export default {
  name: 'App',
  router: router,
  components: { Loading, MyHeader },
  data: () => ({
    user: true
  })
}
</script>
