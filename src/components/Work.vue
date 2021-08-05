<template>
  <div class="content-body">
    <div class="work-container d-flex flex-column">
      <h4
        class="mb-4"
        style="text-align: center; max-width: 650px; align-self: center"
      >
        Need an expert and outside perspective on a project, initiative, or
        dream you are working on? I’d love to help. Get in touch. This is the
        work I do:
      </h4>
      <div>
        <div class="work-list">
          <h4 class="work-title">Mallowfields</h4>
          <p class="work-info">
            I'm a Co-CEO and Software Engineer at Mallowfields. I have an
            awesome team that creates enterprise software. Check out more of
            what we do here:
            <a href="https://mallowfields.com" target="_blank"
              >Mallowfields Website</a
            >
          </p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Consulting</h4>
          <p class="work-info">
            After going through WMCAT's Public Agency's program Community
            Catalysts, I have started doing consulting with community projects.
            I am equipted with equity-centered design thinking and my own
            unique, gentle perspective.
          </p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Artwork</h4>
          <p class="work-info">something</p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Teaching</h4>
          <p class="work-info">
            You can catch me teaching Grand Circus's Intro to Code workshop. I
            don't teach EVERY Tuesday, but it is happening every Tuesday. Fill
            free to sign up and write your first line of code:
            <a href="https://www.grandcircus.co/workshops/" target="_blank"
              >Grand Circus Workshops</a
            >
          </p>
        </div>
        <v-divider></v-divider>

        <div class="work-list">
          <h4 class="work-title">Speaking</h4>
          <p class="work-info">something</p>
        </div>
        <v-divider></v-divider>
      </div>
      <v-icon size="100px" class="pt-0" color="primary"
        >mdi-chevron-down</v-icon
      >
    </div>

    <div class="logos-section" style="margin-top: -40px">
      <p>Who I've worked with before:</p>
      <div class="logos">
        <div v-for="(icon, i) in icons" :key="i" class="mx-4">
          <v-avatar :color="icon.color" size="120px"
            ><img :src="icon.src" :style="icon.style"
          /></v-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  height: 250px;
  align-items: center;
  padding: 24px;

  .logos {
    display: flex;
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
