<template>
  <v-app>
    <div v-if="user" class="content-container">
      <my-component></my-component>
    </div>
    <loading v-else class="loading-container"></loading>
  </v-app>
</template>

<script>
import Loading from '@/components/Loading'
import MyComponent from '@/components/MyComponent'

export default {
  name: 'App',
  components: { Loading, MyComponent },
  data: () => ({
    user: true
  })
}
</script>
