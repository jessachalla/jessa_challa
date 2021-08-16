<template>
  <div class="content-body">
    <div class="contact-page">
      <div>
        <div class="contact-info">
          <p class="contact-title">Call or Text</p>
          <p>
            <a class="contact-links">‪(616) 287-0177‬</a>
          </p>
        </div>

        <div class="contact-info">
          <p class="contact-title">Email</p>
          <p>
            <a class="contact-links" href="mailto:contact@jessachalla.com"
              >contact@jessachalla.com</a
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
          <p class="contact-title">AIGA WM</p>
          <p class="contact-title">Dir. of Community & Connection</p>
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
              >Set up virtual chat here</a
            >
          </p>
        </div>
      </div>

      <img
        src="images/Jessa_Challa_Headshot.jpg"
        height="400px"
        class="headshot"
      />
    </div>
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
.contact-page {
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-bottom: 85px;
}
.contact-info {
  margin-top: 36px;
  line-height: 10px;

  .contact-title {
    font-family: "Caveat";
    font-size: 24px;
    line-height: 20px;
    margin-bottom: 4px;
  }
}

.headshot {
  margin-left: 20px;
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

  .headshot {
    margin-top: 20px;
    margin-left: 0;
  }
}

@media only screen and (max-width: 698px) {
  .contact-footer {
    position: static;
    bottom: 0;
  }
}
</style>
