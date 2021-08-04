<template>
  <v-app>
    <div class="content-container">
      <my-header></my-header>
      <div class="content-container">
        <router-view></router-view>
      </div>
      <v-footer class="d-flex justify-center">
        <div>{{ new Date().getFullYear() }} — jessa challa</div>
      </v-footer>
    </div>
    <!-- <loading v-else class="loading-container"></loading> -->
  </v-app>
</template>

<script>
import MyHeader from '@/components/Header'
// import Loading from '@/components/Loading'
import router from './router.js'

export default {
  name: 'App',
  router: router,
  components: { MyHeader },
  data: () => ({
    user: true
  })
}
</script>
