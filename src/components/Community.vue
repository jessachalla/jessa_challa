<template>
  <div>
    <v-container class="resources">
      <div v-for="(item, i) in items" :key="i">
        <v-card
          :color="item.color"
          dark
          max-width="400px"
          min-width="200px"
          class="my-4"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                v-text="item.title"
                style="word-break: normal"
              ></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  :href="item.href"
                  :target="item.target"
                  class="ml-2 mt-5"
                  outlined
                  rounded
                >
                  Open Resource
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-btn :href="item.href" target="_blank">
                <v-img :src="item.src" width="140px"></v-img>
              </v-btn>
            </v-avatar>
          </div>
        </v-card>
      </div>
    </v-container>
    <my-footer class="community-footer"></my-footer>
  </div>
</template>

<script>
import MyFooter from '@/components/Footer'

export default {
  components: {
    MyFooter
  },
  data: () => ({
    items: [
      {
        color: 'primary',
        src: 'images/theandproject.png',
        title: 'The And Project',
        href: 'https://www.jessachalla.com/bipoc',
        target: '',
        artist: `Website created by Jessa Challa. A group project curated by Jessa's TLP team.`
      },
      {
        color: 'primary',
        src: 'images/map_project.jpg',
        title: 'BIPOC Businesses in GR Map',
        href: 'https://www.jessachalla.com/bipoc',
        target: '',
        artist: 'Created by Jessa Challa'
      },
      {
        color: 'primary',
        src: 'images/kids_count.jpg',
        title: 'MLPP 2021 Kids Count Data Book',
        href: 'https://mlpp.org/kids-count/2021databook/',
        target: '_blank',
        artist: 'Illustrations by Jessa Challa'
      },
      {
        color: 'primary',
        src: 'images/walker_parks_project.jpg',
        title: 'City of Walker Parks Map',
        href: 'https://arcg.is/0KbeG1',
        target: '_blank',
        artist: 'Created by Jessa Challa'
      },
      {
        color: 'primary',
        src: 'images/veterans_services_map.jpg',
        title: 'West Michigan Veterans Coalition Map',
        href: 'https://arcg.is/1ieGLn',
        target: '_blank',
        artist: 'Created by Jessa Challa'
      }
    ]
  })
}
</script>

<style lang="scss">
.community-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 897px) {
  .community-footer {
    position: static;
  }
}
</style>
