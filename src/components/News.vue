
<template>
  <div class="content-body">
    <div class="press">
      <h2>In the News</h2>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Articles</th>
              <th class="text-left">Publisher</th>
              <th class="text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in articles" :key="item.name">
              <td class="py-2">
                <a :href="item.href" :target="item.target">{{ item.name }}</a>
              </td>
              <td>{{ item.publisher }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-icon size="100px" class="pt-0" color="primary"
        >mdi-chevron-down</v-icon
      >

      <div class="video-section">
        <h2>Videos</h2>
        <div class="videos-container">
          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube.com/embed/-vvUGLW50sY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader
              >11th Annual Epic Awards Gala Introduction Video</v-subheader
            >
          </div>

          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube.com/embed/2CxDm-s-Xgs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader
              >Grand Rapids Fireside Chat with Jessa Challa CEO of
              Mallowfields</v-subheader
            >
          </div>

          <div class="video-container">
            <iframe
              class="video"
              src="https://player.vimeo.com/video/630319705?h=fa307819f3"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader>We Are GR - Mallowfields</v-subheader>
          </div>

          <div class="video-container">
            <iframe
              src="https://www.youtube.com/embed/9UGV27-Gw1U"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader>WZZM 13 Interview</v-subheader>
          </div>

          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube-nocookie.com/embed/XbzKTciguVs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader>Fox 17 Interview</v-subheader>
          </div>

          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube.com/embed/esRFY6MjfPI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader>La Mejor GR Interview</v-subheader>
          </div>

          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube-nocookie.com/embed/3fvwlZcMSX8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader
              >WMTT: Promoting Diversity in Tech Industry</v-subheader
            >
          </div>

          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube-nocookie.com/embed/82vdaXjxRgg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader
              >Successful Woman in Tech Discuss Impostor Syndrome</v-subheader
            >
          </div>
          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube-nocookie.com/embed/ak5wA4oTAdM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <v-subheader class="mt-0 pt-0"
              >Aquinas College: Jessa Challa '17</v-subheader
            >
          </div>
        </div>
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
  },
  data: () => ({
    articles: [
      {
        name: 'Software engineer paves way for inclusion in tech industry',
        publisher: 'MiBiz',
        date: '11/7/2021',
        href: 'https://mibiz.com/sections/economic-development/software-engineer-paves-way-for-inclusion-in-tech-industry',
        target: '_blank'
      },
      {
        name: 'The Return of the Grand Rapids Chamber’s EPIC Awards',
        publisher: 'Grand Rapids Business Journal',
        date: '10/1/2021',
        href: 'https://grbj.com/sponsored-content/the-return-of-the-grand-rapids-chambers-epic-awards/',
        target: '_blank'
      },
      {
        name: 'Interactive map designed to boost awareness of minority-owned businesses in Grand Rapids',
        publisher: 'MLive',
        date: '9/30/2021',
        href: 'https://www.mlive.com/news/grand-rapids/2021/08/interactive-map-designed-to-boost-awareness-of-minority-owned-businesses-in-grand-rapids.html',
        target: '_blank'
      },
      {
        name: 'West Michigan woman creates virtual map of minority-owned businesses',
        publisher: 'WZZM 13',
        date: '9/24/2021',
        href: 'https://www.wzzm13.com/article/news/local/west-michigan-woman-creates-virtual-map-of-minority-owned-businesses/69-67d59c9e-41fe-4c00-9dec-90b0d5458125',
        target: '_blank'
      },
      {
        name: 'Grand Rapids software engineer creates minority business maps for the community',
        publisher: 'WGVU News',
        date: '9/23/2021',
        href: 'https://www.wgvunews.org/mutually-inclusive/2021-08-23/grand-rapids-software-engineer-creates-minority-business-maps-for-the-community',
        target: '_blank'
      },
      {
        name: `West Michigan woman hoping to 'map out' better community`,
        publisher: 'Fox 17 West Michigan',
        date: '9/14/2021',
        href: 'https://www.fox17online.com/news/local-news/grand-rapids/west-michigan-woman-hoping-to-map-out-better-community',
        target: '_blank'
      }
    ]
  })
}
</script>

<style lang="scss">
.video-container {
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  align-items: center;
  justify-content: space-between;
  max-width: 270px;
}

.video {
  align-self: center;
  width: 100%;
}

.v-subheader {
  height: 40px;
  text-align: center;
  padding: 5px;
}
</style>
