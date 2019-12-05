<template>
  <section class="container mt-4 pt-2">
    <div class="row mb-2">
      <div class="col-12">
        <h3>Category</h3>
      </div>
    </div>

    <flickity
      class="button-group filters-button-group"
      ref="flickity"
      :options="flickityOptions"
    >
      <div class="carousel-cell" data-filter="*">
        <h5 class="ml-3 mt-2 font-weight-bold">Semua</h5>
      </div>
      <div class="carousel-cell" data-filter=".pria">
        <h5 class="ml-3 mt-2 font-weight-bold">Pria</h5>
      </div>
      <div class="carousel-cell" data-filter=".wanita">
        <h5 class="ml-3 mt-2 font-weight-bold">Wanita</h5>
      </div>
      <div class="carousel-cell" data-filter=".top">
        <h5 class="ml-3 mt-2 font-weight-bold">Top</h5>
      </div>
      <div class="carousel-cell" data-filter=".bottom">
        <h5 class="ml-3 mt-2 font-weight-bold">Bottom</h5>
      </div>
    </flickity>

    <div class="grid mt-4 mb-5">
      <div class="grid-sizer"></div>
      <div class="grid-item pria top">
        <img src="@/assets/img/pria/1.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
      <div class="grid-item pria top">
        <img src="@/assets/img/pria/2.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
      <div class="grid-item pria top">
        <img src="@/assets/img/pria/3.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
      <div class="grid-item pria bottom">
        <img src="@/assets/img/pria/4.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
      <div class="grid-item pria bottom">
        <img src="@/assets/img/pria/5.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
      <div class="grid-item wanita top">
        <img src="@/assets/img/wanita/1.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
      <div class="grid-item wanita top">
        <img src="@/assets/img/wanita/2.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
      <div class="grid-item wanita bottom">
        <img src="@/assets/img/wanita/3.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
      <div class="grid-item wanita bottom">
        <img src="@/assets/img/wanita/4.jpg" />
        <router-link class="stretched-link" :to="{ name: 'detail' }" />
      </div>
    </div>
  </section>
</template>

<script>
import Isotope from "isotope-layout";
import Flickity from "vue-flickity";
import imagesLoaded from "imagesloaded";

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
  },
  mounted() {
    // init Isotope
    const grid = document.querySelector(".grid");

    const iso = new Isotope(grid, {
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer"
      }
    });

    // filter functions
    const filterFns = {
      // show if number is greater than 50
      numberGreaterThan50(itemElem) {
        const number = itemElem.querySelector(".number").textContent;
        return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium(itemElem) {
        const name = itemElem.querySelector(".name").textContent;
        return name.match(/ium$/);
      }
    };

    // bind filter button click
    const filtersElem = document.querySelector(".filters-button-group");
    filtersElem.addEventListener("click", ({ target }) => {
      let filterValue = target.getAttribute("data-filter");
      // use matching filter function
      filterValue = filterFns[filterValue] || filterValue;
      iso.arrange({ filter: filterValue });
    });

    imagesLoaded(grid).on("progress", () => {
      // layout Isotope after each image loads
      iso.layout();
    });
  }
};
</script>

<style scoped>
.carousel-cell {
  width: 40%; /* half-width */
  height: 80px;
  margin-right: 10px;
  background-color: #7bc1f9;
  border: 2px solid #4ba2e4;
  border-radius: 20px;
}

/* clear fix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}

.grid-sizer,
.grid-item {
  width: 10rem;
}

.grid-item > img {
  border-radius: 20px;
  padding: 5px;
}

.grid-item {
  float: left;
}

.grid-item img {
  display: block;
  max-width: 100%;
}
</style>
