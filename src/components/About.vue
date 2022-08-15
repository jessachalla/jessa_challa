<template>
  <div>
    <v-container class="about">
      <div class="about-ps mt-10">
        <v-img
          lazy-src="images/jessa_cutout.jpg"
          src="images/jessa_cutout.jpg"
          class="jessa"
        ></v-img>
        <p class="intro-p">
          Hi there! I'm Jessa Challa (she/her/hers). I’m a biracial Black woman, entrepreneur, technologist, and equity advocate. For work, I serve as
          the Director of Software and IT Strategy at
          <a href="https://nxssystems.com/" target="_blank" class="flair"
            >Nexus Technology Services</a
          >. Nexus is a leader in the technology industry in Grand Rapids, Michigan and a strong supporter of community-based efforts.
        </p>
        <p class="intro-p">
          I graduated from
          <a href="https://www.aquinas.edu/" target="_blank" class="flair"
            >Aquinas College</a
          >
          with a degree in Geography. I focused on Geographic Information
          Systems (GIS), which opened doors to impact local government and the
          nonprofit sector. In the past, I’ve worked at the Grand Valley Metro
          Council, Grand Rapids Public Museum, and the City of Grand Rapids
          Engineering Department and Parking Department.
        </p>
        <p class="intro-p">
          My journey into the tech industry was
          non-traditional: in 2019, I completed a Coding Bootcamp through
          <a href="https://www.grandcircus.co/" target="_blank" class="flair"
            >Grand Circus</a
          >. Now, I teach free coding classes through Grand Circus. I also
          mentor and connect womxn and BIPOC individuals to opportunities in the
          tech sector. I have the ultimate goal of making the tech sector a more
          inviting and inclusive place for all.
        </p>
        <p class="intro-p">
          And what about community work? Well, that’s where my heart is at! I
          was a member of the 2020 Cohort of Community Catalysts at
          <a
            href="https://publicagency.wmcat.org/"
            target="_blank"
            class="flair"
            >WMCAT’s Public Agency</a
          >. In that program, I learned how to utilize Equity-Centered Design to
          challenge and change systems and institutions of power to be more
          equitable. I also participated in the
          <a
            href="https://www.urbancorecollective.org/"
            target="_blank"
            class="flair"
            >Urban Core Collective's</a
          >
          Transformational Leaders Program. Both of these programs helped prepare me to work on community, group, and personal projects
          that I share as community resources.
        </p>
        <p class="intro-p">
          I believe that with the correct intention, tech can be an effective and versatile equity tool for all. If you are interested in connecting and collaborating, feel free to reach out. In any case, I am very thankful that you stopped by to learn a little more about
          me!
        </p>
        <p class="signature">
          <span style="color: #92140c">&hearts;</span><span>Jessa</span>
        </p>
      </div>
    </v-container>
    <my-footer class="about-footer"></my-footer>
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
.about-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 803px) {
  .about-footer {
    position: static;
    bottom: 0;
  }
}
</style>
