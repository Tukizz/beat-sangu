<template>
  <flickity ref="flickity" :options="flickityOptions">
    <div class="carousel-cell">
      <img class="carousel-image" src="@/assets/img/baju.jpg" alt="baju" />
    </div>
    <div class="carousel-cell">
      <img class="carousel-image" src="@/assets/img/baju.jpg" alt="baju" />
    </div>
  </flickity>
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
        contain: true,
        pageDots: false
      }
    };
  }
};
</script>

<style scoped>
.carousel-cell {
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  display: block;
  max-height: 100%;
}
</style>
