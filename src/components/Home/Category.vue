<template>
  <section class="container mt-4 pt-2">
    <div class="row mb-2">
      <div class="col-12">
        <h3>Category</h3>
      </div>
    </div>
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <h5 class="ml-3 mt-2 font-weight-bold">Pria</h5>
        <!-- <img class="img-fluid" src="@/assets/img/banner.jpg" alt="Event"> -->
        <!-- <router-link :to="{ name: 'storyDetailMobile' }" class="stretched-link"></router-link> -->
      </div>
      <div class="carousel-cell">
        <h5 class="ml-3 mt-2 font-weight-bold">Wanita</h5>
        <!-- <img class="img-fluid" src="@/assets/img/banner2.jpg" alt="Event"> -->
        <!-- <router-link :to="{ name: 'storyDetailMobile' }" class="stretched-link"></router-link> -->
      </div>
      <div class="carousel-cell">
        <h5 class="ml-3 mt-2 font-weight-bold">Top</h5>
        <!-- <img class="img-fluid" src="@/assets/img/banner3.jpg" alt="Event"> -->
        <!-- <router-link :to="{ name: 'storyDetailMobile' }" class="stretched-link"></router-link> -->
      </div>
      <div class="carousel-cell">
        <h5 class="ml-3 mt-2 font-weight-bold">Bottom</h5>
        <!-- <img class="img-fluid" src="@/assets/img/banner3.jpg" alt="Event"> -->
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
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true,
        contain: true
      }
    };
  }
};
</script>

<style scoped>
/* .carousel {
        height: 160px;
    } */
.carousel-cell {
  width: 40%; /* half-width */
  height: 80px;
  margin-right: 10px;
  background-color: #c4c4c4;
  border: 2px solid black;
  border-radius: 20px;
  /* height: 100%; */
}
</style>
