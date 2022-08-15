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
      <div class="d-flex flex-column align-center">
        <div class="work-list">
          <h4 class="work-title">Nexus Technology Services</h4>
          <p class="work-info">
            I'm the Director of Software and IT strategy at Nexus Technology Services. Our team has experts in AV, Website and Hosting, Infrastructure, Managed Services, and more. Check out more of
            what we do here:
            <a href="https://nxssystems.com/" target="_blank"
              >Nexus Website</a
            >.
          </p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Consulting</h4>
          <p class="work-info">
            I've participated in multiple leadership programs including WMCAT's Public Agency's Community
            Catalysts, UCC's Transformational Leadership Program, and the GR Chamber's Emerging Leaders. Because of this experience, I have worked as a consultant on a variety of community projects. I
            specialize in equity-centered design thinking, technology, and have my own
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
          <a :href="icon.href" :target="icon.target">
            <v-avatar :color="icon.color" size="120px"
              ><img :src="icon.src" :style="icon.style"
            /></v-avatar>
          </a>
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
    icons: [
      {
        color: 'primary',
        src: 'images/Grand-Circus.png',
        href: 'https://grandcircus.co',
        target: '_blank',
        style: 'height:50%; width:70%; border-radius: 0;'
      },
      {
        color: 'white',
        src: 'images/aiga_wm.png',
        href: 'https://westmichigan.aiga.org/',
        target: '_blank',
        style: 'height:25%; width:80%; border-radius: 0;'
      },
      {
        color: 'primary',
        src: 'images/wmcat_white.svg',
        href: 'https://publicagency.wmcat.org/',
        target: '_blank',
        style: 'width:90%; border-radius: 0;'
      },
      {
        color: 'white',
        src: 'images/EquityPac.png',
        href: 'https://www.equitypacmi.com/',
        target: '_blank',
        style: 'height:65%; width:80%; border-radius: 0;'
      },
      {
        color: 'primary',
        src: 'images/urbancorecollective.png',
        href: 'https://www.urbancorecollective.org/',
        target: '_blank',
        style: 'height:45%; width:80%; border-radius: 0;'
      }
    ]
  })
}
</script>

<style lang="scss">
.work-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 1600px) {
  .work-footer {
    position: static;
    bottom: 0;
  }
}

.logos-section {
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  align-items: center;
  padding: 24px 24px 85px;

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
    max-width: 10vw;
    margin-right: 20px;
  }

  .work-info {
    width: 45vw;
    margin-bottom: 0px !important;
  }

  @media only screen and (max-width: 800px) {
    .work-list {
      justify-content: space-around;
      width: 90vw;
    }
  }
}
</style>
