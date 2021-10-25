<template>
  <div class="content-body">
    <div class="bipoc-page">
      <div class="d-flex align-center flex-column map-container">
        <iframe
          src="https://mallowfields.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=dbfdb420ccc241b39a0b9a9ca9a59507"
          class="map"
          frameborder="0"
          style="border: 0;"
          allowfullscreen
          >iFrames are not supported on this page.</iframe
        >
        <v-icon size="100px" class="pt-0" color="primary"
          >mdi-chevron-down</v-icon
        >
      </div>

      <div class="d-flex align-center flex-column directory-section">
        <div class="d-flex align-center flex-column bis-directory" style="width: 95%;">
          <h2>BIPOC Business Directory</h2>
          <unicorn class="content-body" style="height:100%;"></unicorn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Unicorn from '@/components/Unicorn.vue'
export default {
  components: {
    Unicorn
  }
}
</script>

<style lang="scss">
.data-table {
  .v-data-table__wrapper {
    max-height: calc(100vh - 280px) !important;
  }
}
</style>
