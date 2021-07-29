<template>
  <div class="content-container">
    <my-header></my-header>
    <div class="content-body mt-15">
      <div class="content-body pa-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Condimentum mattis pellentesque id nibh tortor id. Arcu bibendum at
          varius vel pharetra vel turpis. Pellentesque sit amet porttitor eget
          dolor morbi non. In nisl nisi scelerisque eu ultrices vitae. Ante in
          nibh mauris cursus mattis molestie a iaculis. Pellentesque elit
          ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
          Penatibus et magnis dis parturient montes nascetur ridiculus mus.
          Turpis cursus in hac habitasse platea dictumst. Condimentum mattis
          pellentesque id nibh tortor. Ac turpis egestas sed tempus urna et.
          Duis convallis convallis tellus id interdum velit laoreet. Vel
          facilisis volutpat est velit egestas dui id. Aliquam purus sit amet
          luctus venenatis lectus magna. Quis ipsum suspendisse ultrices gravida
          dictum fusce ut placerat. Duis ut diam quam nulla porttitor massa.
        </p>

        <v-card class="my-6">
          <v-tabs color="deep-purple accent-4" right>
            <v-tab>Landscape</v-tab>
            <v-tab>City</v-tab>
            <v-tab>Abstract</v-tab>

            <v-tab-item v-for="n in 3" :key="n">
              <v-container fluid>
                <v-row>
                  <v-col v-for="i in 6" :key="i" cols="2" md="4">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${
                        i * n * 5 + 10
                      }`"
                      :lazy-src="`https://picsum.photos/10/6?image=${
                        i * n * 5 + 10
                      }`"
                      aspect-ratio="1"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>

        <p>
          Sodales ut eu sem integer vitae justo eget magna fermentum. Sit amet
          purus gravida quis blandit turpis cursus. Tincidunt praesent semper
          feugiat nibh sed. Faucibus a pellentesque sit amet. Elementum integer
          enim neque volutpat ac tincidunt. Sit amet consectetur adipiscing elit
          pellentesque habitant. Sociis natoque penatibus et magnis. Cursus
          turpis massa tincidunt dui. Proin fermentum leo vel orci porta non
          pulvinar neque laoreet. Nunc aliquet bibendum enim facilisis gravida.
          Rhoncus urna neque viverra justo nec ultrices. Cursus vitae congue
          mauris rhoncus aenean vel elit scelerisque. Turpis egestas sed tempus
          urna et. Mattis ullamcorper velit sed ullamcorper. Nibh cras pulvinar
          mattis nunc sed. Sodales ut etiam sit amet. Sit amet volutpat
          consequat mauris. Erat nam at lectus urna duis convallis convallis
          tellus. Quis auctor elit sed vulputate mi sit amet mauris. Vel elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
          tristique. Tincidunt id aliquet risus feugiat in ante. Mi eget mauris
          pharetra et ultrices neque ornare aenean. Cum sociis natoque penatibus
          et magnis dis parturient montes. Eu augue ut lectus arcu bibendum at.
          Enim nunc faucibus a pellentesque sit. Vitae turpis massa sed
          elementum tempus egestas. Urna nec tincidunt praesent semper feugiat
          nibh. Ut eu sem integer vitae justo eget magna fermentum. A diam
          sollicitudin tempor id eu nisl nunc mi ipsum. Hac habitasse platea
          dictumst vestibulum. Feugiat nisl pretium fusce id velit ut. Nam at
          lectus urna duis. Mollis aliquam ut porttitor leo a diam sollicitudin
          tempor id.
        </p>

        <v-timeline class="my-6">
          <v-timeline-item>timeline item</v-timeline-item>
          <v-timeline-item class="text-right"> timeline item </v-timeline-item>
          <v-timeline-item>timeline item</v-timeline-item>
        </v-timeline>

        <p>
          A iaculis at erat pellentesque adipiscing commodo elit. Dignissim cras
          tincidunt lobortis feugiat vivamus at augue eget arcu. Facilisis
          gravida neque convallis a. Amet nulla facilisi morbi tempus iaculis
          urna id volutpat lacus. Enim diam vulputate ut pharetra sit amet
          aliquam id diam. Ut aliquam purus sit amet luctus venenatis. Ut eu sem
          integer vitae justo eget magna. Auctor elit sed vulputate mi sit.
          Congue eu consequat ac felis donec et odio pellentesque diam.
          Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Diam
          maecenas ultricies mi eget mauris. Eu lobortis elementum nibh tellus
          molestie nunc non blandit massa. Tortor posuere ac ut consequat semper
          viverra nam libero justo. Neque vitae tempus quam pellentesque nec nam
          aliquam sem et. Tempus iaculis urna id volutpat lacus laoreet non.
          Lacinia at quis risus sed vulputate. Quis varius quam quisque id diam.
          Orci sagittis eu volutpat odio facilisis mauris sit amet. Id donec
          ultrices tincidunt arcu. Diam sollicitudin tempor id eu nisl nunc mi
          ipsum. Lacinia quis vel eros donec ac odio tempor orci. Consequat ac
          felis donec et odio pellentesque diam volutpat. Nec ullamcorper sit
          amet risus nullam eget felis. Ut sem viverra aliquet eget sit amet
          tellus. Nunc lobortis mattis aliquam faucibus.
        </p>
        <v-expansion-panels class="my-6">
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header> Item </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <p>
          Lectus urna duis convallis convallis. Hac habitasse platea dictumst
          vestibulum rhoncus est pellentesque elit ullamcorper. Sit amet
          facilisis magna etiam tempor orci eu lobortis. Quis viverra nibh cras
          pulvinar mattis nunc sed blandit. Lacus suspendisse faucibus interdum
          posuere lorem ipsum dolor sit amet. Volutpat blandit aliquam etiam
          erat velit scelerisque in dictum non. Pellentesque nec nam aliquam sem
          et tortor consequat id. Augue neque gravida in fermentum et
          sollicitudin ac. Consectetur lorem donec massa sapien faucibus. Ipsum
          dolor sit amet consectetur adipiscing elit. Id nibh tortor id aliquet
          lectus proin nibh. Ultricies tristique nulla aliquet enim tortor. Nibh
          ipsum consequat nisl vel. Justo eget magna fermentum iaculis eu non.
          Senectus et netus et malesuada fames. Pulvinar pellentesque habitant
          morbi tristique senectus et netus et malesuada. Feugiat sed lectus
          vestibulum mattis ullamcorper. Cras fermentum odio eu feugiat pretium.
          Ullamcorper sit amet risus nullam eget felis eget nunc lobortis.
          Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing
          elit. Aenean vel elit scelerisque mauris pellentesque pulvinar
          pellentesque habitant. Imperdiet dui accumsan sit amet nulla facilisi.
          Lobortis elementum nibh tellus molestie nunc. Dictum varius duis at
          consectetur. Vitae suscipit tellus mauris a diam maecenas sed enim.
          Tristique et egestas quis ipsum. Molestie ac feugiat sed lectus. Nunc
          aliquet bibendum enim facilisis gravida neque convallis a. Nibh
          venenatis cras sed felis eget. Bibendum est ultricies integer quis
          auctor elit. At auctor urna nunc id cursus metus.
        </p>
        <div class="text-center ma-6">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Click Me
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Privacy Policy
              </v-card-title>

              <v-card-text class="my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <p>
          At tellus at urna condimentum mattis pellentesque id. Ac turpis
          egestas sed tempus urna et pharetra. Lorem sed risus ultricies
          tristique nulla aliquet enim tortor at. Facilisi nullam vehicula ipsum
          a arcu cursus vitae congue. Dolor sit amet consectetur adipiscing.
          Vivamus at augue eget arcu dictum varius duis. Tempor nec feugiat nisl
          pretium fusce id velit. In hac habitasse platea dictumst vestibulum
          rhoncus est pellentesque. Iaculis eu non diam phasellus vestibulum.
          Sodales ut eu sem integer. Arcu odio ut sem nulla pharetra diam sit
          amet. A iaculis at erat pellentesque adipiscing commodo elit at. Et
          tortor consequat id porta nibh venenatis cras sed felis. Laoreet sit
          amet cursus sit. Cras ornare arcu dui vivamus arcu. Placerat orci
          nulla pellentesque dignissim enim sit amet venenatis. Sed id semper
          risus in hendrerit gravida. Sed velit dignissim sodales ut eu sem.
          Urna porttitor rhoncus dolor purus non enim praesent. Diam phasellus
          vestibulum lorem sed risus ultricies tristique nulla. Sit amet mauris
          commodo quis imperdiet. Etiam tempor orci eu lobortis elementum nibh
          tellus. Pharetra et ultrices neque ornare aenean. Eget egestas purus
          viverra accumsan. Blandit cursus risus at ultrices mi tempus.
          Ullamcorper morbi tincidunt ornare massa eget egestas. Nibh cras
          pulvinar mattis nunc sed blandit. Tellus at urna condimentum mattis
          pellentesque id nibh tortor id. Habitasse platea dictumst quisque
          sagittis purus sit amet. Mauris cursus mattis molestie a iaculis at
          erat pellentesque adipiscing. Tempus quam pellentesque nec nam. Neque
          convallis a cras semper auctor neque vitae.
        </p>
        <v-carousel class="my-6">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <p>
          Gravida arcu ac tortor dignissim convallis aenean. Ac tortor vitae
          purus faucibus ornare suspendisse sed nisi lacus. Sit amet consectetur
          adipiscing elit duis tristique sollicitudin nibh. Cras sed felis eget
          velit aliquet sagittis id consectetur. Magna ac placerat vestibulum
          lectus mauris ultrices eros in cursus. Orci porta non pulvinar neque.
          Arcu risus quis varius quam. Nunc scelerisque viverra mauris in
          aliquam sem fringilla ut. Scelerisque eu ultrices vitae auctor eu
          augue ut lectus arcu. Donec et odio pellentesque diam volutpat
          commodo. Feugiat pretium nibh ipsum consequat nisl vel. Maecenas
          volutpat blandit aliquam etiam. Pharetra magna ac placerat vestibulum
          lectus mauris ultrices eros. Suspendisse faucibus interdum posuere
          lorem ipsum dolor sit amet. Eu volutpat odio facilisis mauris sit amet
          massa vitae. Parturient montes nascetur ridiculus mus mauris vitae.
          Mus mauris vitae ultricies leo integer malesuada. Ac turpis egestas
          maecenas pharetra convallis posuere morbi leo urna. Interdum
          consectetur libero id faucibus nisl tincidunt eget. Et egestas quis
          ipsum suspendisse ultrices gravida dictum fusce ut. Aenean sed
          adipiscing diam donec. Porttitor leo a diam sollicitudin. Turpis
          egestas pretium aenean pharetra magna. Gravida arcu ac tortor
          dignissim convallis aenean. Ac feugiat sed lectus vestibulum mattis
          ullamcorper. Diam sollicitudin tempor id eu nisl nunc mi. Posuere ac
          ut consequat semper viverra. Purus in massa tempor nec feugiat nisl
          pretium fusce. Interdum consectetur libero id faucibus nisl tincidunt.
          Integer feugiat scelerisque varius morbi enim nunc faucibus a
          pellentesque. Amet commodo nulla facilisi nullam vehicula ipsum a.
          Curabitur gravida arcu ac tortor dignissim convallis aenean. At quis
          risus sed vulputate odio ut enim. Erat velit scelerisque in dictum non
          consectetur a. Imperdiet nulla malesuada pellentesque elit. Quis enim
          lobortis scelerisque fermentum dui faucibus in ornare. Nunc id cursus
          metus aliquam eleifend mi in. Aenean pharetra magna ac placerat. Id
          velit ut tortor pretium viverra suspendisse potenti nullam ac. Tortor
          aliquam nulla facilisi cras fermentum odio eu. Fringilla ut morbi
          tincidunt augue interdum velit euismod. Id aliquet lectus proin nibh
          nisl. Nunc eget lorem dolor sed viverra ipsum. Quis blandit turpis
          cursus in hac habitasse platea dictumst quisque. Varius sit amet
          mattis vulputate enim nulla aliquet. Scelerisque eu ultrices vitae
          auctor eu augue ut lectus arcu. Neque laoreet suspendisse interdum
          consectetur. Nulla facilisi nullam vehicula ipsum a arcu cursus. Nulla
          facilisi nullam vehicula ipsum a arcu cursus vitae congue. Fringilla
          est ullamcorper eget nulla facilisi etiam dignissim diam. Tellus
          rutrum tellus pellentesque eu tincidunt tortor aliquam. Odio ut enim
          blandit volutpat maecenas volutpat blandit aliquam etiam. Consequat ac
          felis donec et. Sapien et ligula ullamcorper malesuada. Quis enim
          lobortis scelerisque fermentum dui faucibus in. Pellentesque eu
          tincidunt tortor aliquam nulla. Accumsan sit amet nulla facilisi morbi
          tempus iaculis urna. Dui accumsan sit amet nulla facilisi morbi.
          Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Et magnis dis
          parturient montes nascetur ridiculus mus mauris vitae. Non enim
          praesent elementum facilisis leo vel fringilla est ullamcorper. Tortor
          pretium viverra suspendisse potenti nullam ac. Leo vel fringilla est
          ullamcorper. Lobortis mattis aliquam faucibus purus in massa. Nunc mi
          ipsum faucibus vitae. Dolor magna eget est lorem ipsum dolor sit amet.
          Lectus magna fringilla urna porttitor. Placerat vestibulum lectus
          mauris ultrices eros in. Accumsan sit amet nulla facilisi. Id semper
          risus in hendrerit gravida rutrum quisque non tellus. Lacus viverra
          vitae congue eu consequat. Magna fermentum iaculis eu non diam
          phasellus vestibulum. Ornare massa eget egestas purus viverra.
          Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Leo vel
          orci porta non pulvinar. Ac tortor dignissim convallis aenean et
          tortor. Sed augue lacus viverra vitae congue eu consequat ac. Semper
          eget duis at tellus at urna. Turpis massa tincidunt dui ut ornare
          lectus sit amet.
        </p>
      </div>

      <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'

export default {
  components: { MyHeader },
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ],
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    dialog: false
  })
}
</script>
