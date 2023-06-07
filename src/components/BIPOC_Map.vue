<template>
  <div class="content-body">
    <div class="bipoc-page">
      <div class="d-flex align-center flex-column map-container">
        <iframe
          src="https://arcg.is/0qGnHK"
          class="map"
          frameborder="0"
          style="border: 0"
          allowfullscreen
          >iFrames are not supported on this page.</iframe
        >
      </div>
    </div>
    <my-footer class="work-footer"></my-footer>
  </div>
</template>

<script>
import MyFooter from '@/components/Footer'

export default {
  components: {
    MyFooter
  }
}
</script>

<style lang="scss">
.data-table {
  .v-data-table__wrapper {
    max-height: calc(80vh - 240px) !important;
  }
}
</style>
