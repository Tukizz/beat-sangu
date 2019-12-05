<template>
  <div>
    <nav class="fixed-top navbar shadow-sm">
      <div class="col-auto pl-0 pt-2 pb-1">
        <a href="#!" class="mr-2" @click="toggle">
          <icon :icon="['fas', 'bars']" size="lg" :style="{ color: 'white' }" />
        </a>
        <a class="ml-3" href="/">
          <img
            src="@/assets/logo.svg"
            width="120"
            class="d-inline-block align-top"
            alt=""
          />
        </a>
      </div>
      <div class="col-auto pr-0">
        <div class="search d-inline mr-1">
          <router-link :to="{ name: 'search' }">
            <icon
              :icon="['fas', 'search']"
              size="lg"
              :style="{ color: 'white' }"
            />
          </router-link>
        </div>
        <div class="search d-inline ml-2">
          <router-link :to="{ name: 'keranjang' }">
            <icon
              :icon="['fas', 'shopping-cart']"
              size="lg"
              :style="{ color: 'white' }"
            />
          </router-link>
        </div>
      </div>
    </nav>
    <div v-if="sideBar" id="myModal" class="modal-sidebar">
      <div class="modal-sidebar-content">
        <div class="modal-sidebar-body">
          <div class="container">
            <div class="row">
              <div class="col-6 font-weight-bold pt-3 text-left">
                <img src="@/assets/logo-b.svg" alt="" />
              </div>
              <div class="col-6 text-right">
                <button class="btn p-0 pt-1 mb-3 burger-close" @click="toggle">
                  <icon :icon="['fas', 'times']" size="lg" color="#5c5c5c" />
                </button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="list-group">
                <router-link
                  :to="{ name: 'keranjang' }"
                  class="border-0 list-group-item list-group-item-action"
                >
                  Keranjang
                </router-link>
              </div>
              <div class="list-group">
                <router-link
                  :to="{ name: 'search' }"
                  class="border-0 list-group-item list-group-item-action"
                >
                  Cari
                </router-link>
              </div>
              <div class="list-group">
                <router-link
                  :to="{ name: 'about' }"
                  class="border-0 list-group-item list-group-item-action"
                >
                  About Us
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBar: false
    };
  },
  methods: {
    toggle() {
      this.sideBar = !this.sideBar;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #7bc1f9;
  color: #fff;
}
.search {
  background-color: #4ba2e4;
  padding: 11px 11px 11px 9px;
  border-radius: 100%;
}
.modal-sidebar {
  position: fixed;
  z-index: 999999;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  animation: fadeIn 0.4s forwards;
}
.modal-sidebar-content {
  position: fixed;
  bottom: 0px;
  width: 50%;
  height: 100%;
  background-color: #fefefe;
  animation: slideIn 0.4s forwards;
}
.burger-close {
  margin-top: 10px;
  width: 25px;
}
@keyframes slideIn {
  from {
    right: 100%;
    width: 0%;
  }

  to {
    left: 0%;
    width: 50%;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
