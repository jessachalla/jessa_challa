<template>
  <v-app class="safari_only">
    <div class="content-container safari_only">
      <my-header></my-header>
      <div class="content-container">
        <router-view></router-view>
      </div>
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
