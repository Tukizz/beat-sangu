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

    <div class="mt-4">
      <div class="grid">
        <div class="grid-item pria">
          <img src="@/assets/img/pria/1.jpg" alt="baju pria" />
        </div>
        <div class="grid-item pria">
          <img src="@/assets/img/pria/2.jpg" alt="baju pria" />
        </div>
        <div class="grid-item wanita">
          <img src="@/assets/img/wanita/1.jpg" alt="baju wanita" />
        </div>
        <div class="grid-item wanita">
          <img src="@/assets/img/wanita/2.jpg" alt="baju wanita" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Isotope from "isotope-layout";
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
  },
  mounted() {
    var iso = new Isotope(".grid", {
      itemSelector: ".grid-item",
      // layoutMode: "fitRows",
      // percentPosition: true,
      masonry: {
        // columnWidth: 200,
        // fitWidth: true
        // gutter: 10
      }
    });

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function(itemElem) {
        var number = itemElem.querySelector(".number").textContent;
        return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium: function(itemElem) {
        var name = itemElem.querySelector(".name").textContent;
        return name.match(/ium$/);
      }
    };

    // bind filter button click
    var filtersElem = document.querySelector(".filters-button-group");
    filtersElem.addEventListener("click", function(event) {
      var filterValue = event.target.getAttribute("data-filter");
      // use matching filter function
      filterValue = filterFns[filterValue] || filterValue;
      iso.arrange({ filter: filterValue });
    });
  }
};
</script>

<style scoped>
.carousel-cell {
  width: 40%; /* half-width */
  height: 80px;
  margin-right: 10px;
  background-color: #c4c4c4;
  border: 2px solid black;
  border-radius: 20px;
  /* height: 100%; */
}

.grid-item {
  /* position: relative; */
  /* float: left; */
  width: 250px;
  /* height: 100px; */
  /* margin-bottom: 10px; */
  /* padding: 10px; */
  /* background: #888; */
  /* color: #262524;  */
}
.grid-item img {
  border-radius: 15px;
  display: block;
  max-width: 100%;
}
.grid {
  margin: 0 auto;
}
/* .grid-sizer,
.grid-item {
  width: 100%;
} */

/* .element-item > * {
  margin: 0;
  padding: 0;
} */

/* .element-item .name {
  position: absolute;

  left: 10px;
  top: 60px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
  font-weight: normal;
}

.element-item .symbol {
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 42px;
  font-weight: bold;
  color: white;
}

.element-item .number {
  position: absolute;
  right: 8px;
  top: 5px;
}

.element-item .weight {
  position: absolute;
  left: 10px;
  top: 76px;
  font-size: 12px;
} */
</style>
