<template>
  <section class="container mb-5">
    <div class="row">
      <div class="col-12">
        <h3 class="mb-4">RECOMMEND</h3>
        <flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-recommend">
            <img class="mb-2" src="@/assets/img/baju.jpg" alt="Cover" />
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
          <div class="carousel-recommend">
            <img class="mb-2" src="@/assets/img/baju.jpg" alt="Cover" />
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
          <div class="carousel-recommend">
            <img class="mb-2" src="@/assets/img/baju.jpg" alt="Cover" />
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
          <div class="carousel-recommend">
            <img class="mb-2" src="@/assets/img/baju.jpg" alt="Cover" />
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
          <div class="carousel-recommend">
            <img class="mb-2" src="@/assets/img/baju.jpg" alt="Cover" />
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </flickity>
      </div>
    </div>
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
        freeScroll: true,
        pageDots: false,
        groupCells: true,
        contain: true,
        cellAlign: "left",
        prevNextButtons: false
      },
      tabIndex: 0
    };
  }
};
</script>

<style scoped>
.carousel-recommend {
  width: 60%;
  height: 100px;
  align-items: center;
  justify-content: center;
}

.carousel-recommend img {
  border-radius: 10px;
  display: block;
  max-height: 100%;
}
</style>
