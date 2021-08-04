<template>
  <v-container class="resources">
    <div v-for="(item, i) in items" :key="i">
      <v-card :color="item.color" dark max-width="400px" min-width="200px" class="my-4">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title v-text="item.title" style="word-break: normal"></v-card-title>

            <v-card-subtitle v-text="item.artist"></v-card-subtitle>

            <v-card-actions>
              <v-btn :href="item.href" target="_blank" class="ml-2 mt-5" outlined rounded>
                Open Resource
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-btn href="item.href">
            <v-img :src="item.src" width="140px"></v-img>
            </v-btn>
          </v-avatar>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: 'primary',
        src: 'images/map_project.jpg',
        title: 'Minority-Owned Businesses in GR Map',
        href: 'https://arcg.is/1viKzz0',
        artist: 'Created by Jessa Challa'
      },
      {
        color: 'primary',
        src: 'images/kids_count.jpg',
        title: 'MLPP 2021 Kids Count Data Book',
        href: 'https://mlpp.org/kids-count/2021databook/',
        artist: 'Illustrations by Jessa Challa'
      },
      {
        color: 'primary',
        src: 'images/walker_parks_project.jpg',
        title: 'City of Walker Parks Map',
        href: 'https://arcg.is/0KbeG1',
        artist: 'Created by Jessa Challa'
      },
      {
        color: 'primary',
        src: 'images/veterans_services_map.jpg',
        title: 'West Michigan Veterans Coalition Map',
        href: 'https://arcg.is/1ieGLn',
        artist: 'Created by Jessa Challa'
      }
    ]
  })
}
</script>
