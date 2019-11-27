<template>
  <main>
    <div class="shadow-sm navigation mb-4 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-1 p-0 mr-3 text-left">
            <a href="#" @click="$router.go(-1)">
              <icon
                :icon="['fas', 'arrow-left']"
                size="lg"
                :style="{ color: 'black' }"
              />
            </a>
          </div>
          <div class="col-8 p-0 ">
            <div class="form-group has-search mb-0">
              <icon
                class="icon-search form-control-feedback"
                :icon="['fas', 'search']"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="search"
              />
            </div>
          </div>
          <div class="col-1 ml-3 p-0 text-left">
            <div class="cart d-inline">
              <a href="#">
                <icon
                  :icon="['fas', 'shopping-cart']"
                  size="lg"
                  :style="{ color: 'black' }"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-6">
          <h4>RECENTLY</h4>
        </div>
        <div class="col-6 text-right">
          <small class="text-muted">Clear All</small>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="list-group list-group-flush">
            <a class="list-group-item list-group-item-action">Baju Aldidas</a>
            <a class="list-group-item list-group-item-action"
              >Ronaldi T-shirt</a
            >
            <a class="list-group-item list-group-item-action">Celana Pendek</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-5">
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
    </div>

    <div class="container mb-5">
      <div class="row">
        <div class="col">
          <h3>POPULAR</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a href="#" class="badge badge-search">Celana Dalam</a>
          <a href="#" class="badge badge-search">Tas Gucci</a>
          <a href="#" class="badge badge-search">Kaos Kaki</a>
          <a href="#" class="badge badge-search">Jaket Jeans</a>
          <a href="#" class="badge badge-search">Celana Pendek</a>
          <a href="#" class="badge badge-search">Baju Joker</a>
          <a href="#" class="badge badge-search">Sweater Biru</a>
          <a href="#" class="badge badge-search">Kaos Z</a>
        </div>
      </div>
    </div>
  </main>
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
.navigation {
  padding: 10px 20px 10px 20px;
}

.cart {
  background-color: #ece8e8;
  padding: 11px 11px 11px 9px;
  border-radius: 100%;
}

.badge-search {
  margin-right: 7px;
  margin-top: 10px;
  border: solid #bdbdbd 1px;
  border-radius: 10px;
  padding: 5px 5%;
  color: #4f4f4f;
}

.content {
  padding-top: 2rem;
}

.nav-menu {
  height: 43px;
  margin-right: 1px;
}

.nav-menu a {
  color: #828282 !important;
  font-weight: bold !important;
  font-size: 14px !important;
}

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

.nav-link.active {
  border-bottom: 3px solid #5264a8 !important;
  font-weight: bold !important;
  color: #000 !important;
}

.nav-link {
  color: #828282 !important;
  font-weight: bold !important;
}

.navbar {
  padding: 0rem;
  margin-bottom: 2rem;
}

.has-search {
  width: 100%;
}

.has-search .form-control {
  padding-left: 2.7rem;
  background-color: #ece8e8;
  border: 8px;
  border-radius: 8px;
}

.has-search .form-control:focus {
  background-color: #fff;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  height: 2.375rem;
  left: 15px;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}
</style>
