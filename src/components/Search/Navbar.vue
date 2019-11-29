<template>
  <div class="fixed-top shadow-sm navigation mb-4 bg-light">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-1 pl-0 mr-3 text-left">
          <a @click="$router.go(-1)">
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
</template>

<style scoped>
.navigation {
  padding: 10px 20px 10px 20px;
}

.cart {
  background-color: #ece8e8;
  padding: 11px 11px 11px 9px;
  border-radius: 100%;
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
.nav-menu {
  height: 43px;
  margin-right: 1px;
}

.nav-menu a {
  color: #828282 !important;
  font-weight: bold !important;
  font-size: 14px !important;
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
</style>
