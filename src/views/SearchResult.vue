<template>
  <main style="margin-bottom:20vh; margin-top:12vh;">
    <div class="fixed-top shadow-sm navigation mb-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-1 pl-0 mr-3 text-left">
            <a @click="$router.go(-1)">
              <icon
                :icon="['fas', 'arrow-left']"
                size="lg"
                :style="{ color: 'white' }"
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
                v-model="search"
              />
            </div>
          </div>
          <div class="col-1 ml-3 p-0 text-left">
            <div class="cart d-inline">
              <router-link :to="{ name: 'keranjang' }">
                <icon
                  :icon="['fas', 'shopping-cart']"
                  size="lg"
                  :style="{ color: 'white' }"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="container">
      <div class="row">
        <div class="col">
          <h4>RESULT "{{ search }}"</h4>
        </div>
      </div>
    </section>

    <!-- <div class="card-search border-0">
      <img
        src="@/assets/img/pria/1.jpg"
        class="card-img-top card-img-search"
        alt="baju"
      />
      <div class="card-body card-body-search">
        <h6 class="card-title">Kemeja Dongker</h6>
        <span>Rp. 100.000.-</span>
        <div class="mt-1">
          <icon
            :icon="['fas', 'star']"
            size="xs"
            class="start star-check"
          />
          <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
          <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
          <icon :icon="['fas', 'star']" size="xs" class="star" />
          <icon :icon="['fas', 'star']" size="xs" class="star" />
        </div>
        <router-link
          :to="{ name: 'detail' }"
          class="stretched-link"
        ></router-link>
      </div>
    </div> -->

    <section class="container mt-3">
      <div class="grid mt-4 mb-5">
        <div class="grid-sizer"></div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/pria/1.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>

          <!-- <img src="@/assets/img/pria/1.jpg" />
          <router-link class="stretched-link" :to="{ name: 'detail' }" /> -->
        </div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/pria/2.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/pria/3.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/pria/4.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/pria/5.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/wanita/1.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/wanita/2.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/wanita/3.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
        <div class="grid-item card-search border-0">
          <img
            src="@/assets/img/wanita/4.jpg"
            class="card-img-top card-img-search"
            alt="baju"
          />
          <div class="card-body card-body-search">
            <h6 class="card-title">Kemeja Dongker</h6>
            <span>Rp. 100.000.-</span>
            <div class="mt-1">
              <icon
                :icon="['fas', 'star']"
                size="xs"
                class="start star-check"
              />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
              <icon :icon="['fas', 'star']" size="xs" class="star" />
            </div>
            <router-link
              :to="{ name: 'detail' }"
              class="stretched-link"
            ></router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

export default {
  props: ["message"],
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    if (this.message) {
      this.search = this.message;
    }

    // init Isotope
    const grid = document.querySelector(".grid");

    const iso = new Isotope(grid, {
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer"
      }
    });

    imagesLoaded(grid).on("progress", () => {
      // layout Isotope after each image loads
      iso.layout();
    });
  }
};
</script>

<style scoped>
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

.grid-item {
  float: left;
  padding: 5px;
}

.grid-item img {
  display: block;
  max-width: 100%;
}

.star {
  color: #b6aa44;
}
.star-check {
  color: #ffee58;
}
/* .card-search {
  width: 10rem;
} */
.card-img-search {
  z-index: 10;
  border-radius: 10%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}
.card-body-search {
  margin-top: -20px;
  padding-top: 35px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
}
.navigation {
  padding: 10px 20px 10px 20px;
  background-color: #7bc1f9;
}

.cart {
  background-color: #4ba2e4;
  padding: 11px 11px 11px 9px;
  border-radius: 100%;
}

.has-search {
  width: 100%;
}

.has-search .form-control {
  padding-left: 2.7rem;
  background-color: #4ba2e4;
  border: 8px;
  border-radius: 8px;
}

.has-search .form-control:focus {
  background-color: #fff;
}

.has-search .form-control::placeholder {
  color: #fff;
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
  color: #d3d3d3;
}
.navbar {
  padding: 0rem;
  margin-bottom: 2rem;
}
</style>
