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
          <span class="flair">Hi there! </span> I'm Jessa Challa (she/her). I’m
          a biracial Black woman, lifelong Grand Rapids resident, and equity
          advocate. For work, I’m a Co-CEO and Software Engineer at
          <span class="flair">Mallowfields</span>, a minority and women-owned
          software company in Grand Rapids, MI.
        </p>
        <p class="intro-p">
          I graduated from <span class="flair">Aquinas College</span> with a
          degree in Geography. I focused on Geographic Information Systems
          (GIS), which opened doors to impact local government and the nonprofit
          sector. In the past, I’ve worked at the Grand Valley Metro Council,
          Grand Rapids Public Museum, and the City of Grand Rapids Engineering
          Department and Parking Department.
        </p>
        <p class="intro-p">
          So how did I become a Software Engineer? Well, my tech journey was
          non-traditional: in 2019, I completed a Coding Bootcamp at
          <span class="flair">Grand Circus</span>. Now, I teach free coding
          classes through Grand Circus, mentor and connect womxn and BIPOC
          individuals to opportunities in the tech sector, and maintain a high
          level of excellence within my field. I have the ultimate goal of
          making the tech sector a more inviting and inclusive place for all.
        </p>
        <p class="intro-p">
          And what about community work? Well, that’s where my heart is at! I
          was a member of the 2020 Cohort of Community Catalysts at
          <span class="flair">WMCAT’s Public Agency</span>. In that program, I
          learned how to utilize Equity-Centered Design to challenge and change
          systems and institutions of power to be more equitable. I continue to
          work with Public Agency, but I also work on personal projects that I
          share as community resources.
        </p>
        <p class="intro-p">
          I am very thankful that you stopped by to learn a little more about
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
