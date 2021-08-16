
<template>
  <div class="content-body">
    <div class="news-page">
      <div class="video-container">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/XbzKTciguVs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-container">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/3fvwlZcMSX8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-container">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/82vdaXjxRgg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-container">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/ak5wA4oTAdM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
  }
}
</script>

<style lang="scss">
.news-page {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.video-container {
  // max-width: 700px;
}

.video {
  margin: 30px 0;
  align-self: center;
  width: 100%;
}
</style>
