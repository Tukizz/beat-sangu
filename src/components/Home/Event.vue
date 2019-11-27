<template>
  <section class="container mt-4 pt-2">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="event-cell">
        <img class="img-fluid" src="@/assets/img/banner.jpg" alt="Event" />
        <!-- <router-link :to="{ name: 'storyDetailMobile' }" class="stretched-link"></router-link> -->
      </div>
      <div class="event-cell">
        <img class="img-fluid" src="@/assets/img/banner2.jpg" alt="Event" />
        <!-- <router-link :to="{ name: 'storyDetailMobile' }" class="stretched-link"></router-link> -->
      </div>
      <div class="event-cell">
        <img class="img-fluid" src="@/assets/img/banner3.jpg" alt="Event" />
        <!-- <router-link :to="{ name: 'storyDetailMobile' }" class="stretched-link"></router-link> -->
      </div>
    </flickity>
  </section>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        autoPlay: true,
        prevNextButtons: false,
        adaptiveHeight: true
      }
    };
  }
};
</script>

<style>
.event-cell {
  width: 100%;
  /* height: 110px; */
  height: 7rem;
  margin-right: 10px;
}
.event-cell img {
  border-radius: 10px;
  object-fit: contain;
  /* width:50%; */
}
.flickity-page-dots {
  text-align: left;
  bottom: 5px;
  left: 5px;
}
.flickity-page-dots .dot {
  margin: 0 2px;
  background: transparent;
  border: 2px solid white;
}
</style>
