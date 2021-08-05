<template>
  <div class="content-body">
    <v-container class="d-flex flex-wrap" style="max-width: 800px">
      <div class="contact-page">
        <div class="contact-info">
          <p class="contact-title">Call or Text</p>
          <p>
            <a class="contact-links">‪(616) 287-0177‬</a>
          </p>
        </div>

        <div class="contact-info">
          <p class="contact-title">Personal Email</p>
          <p>
            <a class="contact-links" href="mailto:jessa.challa@gmail.com"
              >jessa.challa@gmail.com</a
            >
          </p>
        </div>

        <div class="contact-info">
          <p class="contact-title">Work Email</p>
          <p>
            <a class="contact-links" href="mailto: jessa@mallowfields.com"
              >jessa@mallowfields.com</a
            >
          </p>
        </div>

        <div class="contact-info">
          <p class="contact-title">
            AIGA WM - Dir. of Community & Connection
          </p>
          <p>
            <a
              class="contact-links"
              href="mailto: diversity@westmichigan.aiga.org"
              >diversity@westmichigan.aiga.org</a
            >
          </p>
        </div>

        <div class="contact-info">
          <p class="contact-title">Let's chat over Calendly</p>
          <p>
            <a
              class="contact-links"
              href="https://calendly.com/jessa-challa-1/coffee-talk"
              target="_blank"
              >Set up virtual chat here.</a
            >
          </p>
        </div>
      </div>

      <v-img
        src="images/Jessa_Challa_Headshot.jpg"
        contain
        height="400px"
        width="200px"
      ></v-img>
    </v-container>
    <my-footer class="contact-footer"></my-footer>
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
.contact-info {
  margin-top: 64px;
  line-height: 10px;

  .contact-title {
    font-family: "Caveat";
    font-size: 24px;
  }
}

.contact-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 800px) {
  .contact-page {
    margin-top: -10px;
  }
  .contact-info {
    margin-top: 32px;
  }
}

@media only screen and (max-width: 698px) {
.contact-footer {
  position: static;
  bottom: 0;
}
}
</style>
