<template>
  <main style="margin-bottom:20vh; margin-top:12vh;">
    <div class="fixed-top shadow-sm navigation mb-4 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-1 pl-0 mr-3 text-left">
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
                v-model="search"
              />
            </div>
          </div>
          <div class="col-1 ml-3 p-0 text-left">
            <div class="cart d-inline">
              <router-link :to="{ name: 'checkout' }">
                <icon
                  :icon="['fas', 'shopping-cart']"
                  size="lg"
                  :style="{ color: 'black' }"
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

    <section class="container mt-3">
      <div class="card-search border-0">
        <img
          src="@/assets/img/baju2.jpg"
          class="card-img-top card-img-search"
          alt="baju"
        />
        <div class="card-body card-body-search pl-0 pr-0">
          <h6 class="card-title">Kemeja Dongker</h6>
          <span>Rp. 100.000.-</span>
          <div class="mt-1">
            <icon :icon="['fas', 'star']" size="xs" class="start star-check" />
            <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
            <icon :icon="['fas', 'star']" size="xs" class="star star-check" />
            <icon :icon="['fas', 'star']" size="xs" class="star" />
            <icon :icon="['fas', 'star']" size="xs" class="star" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
.star {
  color: #b6aa44;
}
.star-check {
  color: #ffee58;
}
.card-search {
  width: 10rem;
}
.card-img-search {
  z-index: 10;
  border-radius: 10%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}
.card-body-search {
  margin-top: -10px;
  margin-left: 10px;
  background-color: #fff;
}
.navigation {
  padding: 10px 20px 10px 20px;
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
