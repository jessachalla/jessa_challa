<template>
  <div class="content-body" style="overflow-x: hidden">
    <div class="work-container d-flex flex-column">
      <h4
        class="mb-4"
        style="text-align: center; max-width: 650px; align-self: center"
      >
        Need an expert? Or a new perspective on a project, initiative, or dream
        you are working toward? I’d love to help! Get in touch. Here’s where I
        can help:
      </h4>
      <div>
        <div class="work-list">
          <h4 class="work-title">Mallowfields</h4>
          <p class="work-info">
            I'm a Co-CEO and Software Engineer at Mallowfields. I have an
            incredible team that creates enterprise software. Check out more of
            what we do here:
            <a href="https://mallowfields.com" target="_blank"
              >Mallowfields Website</a
            >.
          </p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Consulting</h4>
          <p class="work-info">
            After going through WMCAT's Public Agency's program Community
            Catalysts, I have worked as a consultant on community projects. I
            specialize in equity-centered design thinking and have my own
            unique, gentle perspective.
          </p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Teaching</h4>
          <p class="work-info">
            You can catch me teaching Grand Circus's Intro to Code workshop. I'm
            not the teacher EVERY Tuesday, but they happen every Tuesday. Fill
            free to sign up and write your first line of code:
            <a href="https://www.grandcircus.co/workshops/" target="_blank"
              >Grand Circus Workshops</a
            >.
          </p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Artwork</h4>
          <p class="work-info">
            I am a creative by nature. I paint with acrylics and create digital
            illustrations.
          </p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Speaking</h4>
          <p class="work-info">
            I love to share what I know. I am open to speaking on panels
            discussing technology, art, equity-centered design, and community.
          </p>
        </div>
        <v-divider></v-divider>
      </div>
      <v-icon size="100px" class="pt-0" color="primary"
        >mdi-chevron-down</v-icon
      >
    </div>

    <div class="logos-section" style="margin-top: -40px">
      <p>Who I've worked with:</p>
      <div class="logos">
        <div v-for="(icon, i) in icons" :key="i" class="ma-3">
          <v-avatar :color="icon.color" size="120px"
            ><img :src="icon.src" :style="icon.style"
          /></v-avatar>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from '@/components/Footer'

export default {
  components: {
    MyFooter
  },
  data: () => ({
    icons: [
      {
        color: 'primary',
        src: 'images/Grand-Circus.png',
        href: 'https://grandcircus.co',
        style: 'height:50%; width:70%; border-radius: 0;'
      },
      {
        color: 'white',
        src: 'images/aiga_wm.png',
        href: 'https://grandcircus.co',
        style: 'height:25%; width:80%; border-radius: 0;'
      },
      {
        color: 'primary',
        src: 'images/wmcat_white.svg',
        href: 'https://grandcircus.co',
        style: 'width:90%; border-radius: 0;'
      },
      {
        color: 'white',
        src: 'images/EquityPac.png',
        href: 'https://grandcircus.co',
        style: 'height:65%; width:80%; border-radius: 0;'
      }
    ]
  })
}
</script>

<style lang="scss">
.logos-section {
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  // height: 250px;
  align-items: center;
  padding: 24px;

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.work-container {
  margin: 40px 10vw;

  .work-list {
    display: flex;
    padding: 12px;
    align-items: center;
    justify-content: space-evenly;
  }

  .work-title {
    max-width: 5vw;
  }

  .work-info {
    width: 50vw;
    margin-bottom: 0px !important;
  }

  @media only screen and (max-width: 800px) {
    .work-list {
      justify-content: space-between;
    }
  }
}
</style>
