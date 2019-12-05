<template>
  <nav class="navbar fixed-top shadow-sm">
    <div class="col-auto pl-0 pt-2 pb-2">
      <a class="mr-2" @click="$router.go(-1)">
        <icon
          :icon="['fas', 'arrow-left']"
          size="lg"
          :style="{ color: 'white' }"
        />
      </a>
    </div>
    <div class="col-auto pr-0">
      <div class="cart d-inline mr-1">
        <router-link :to="{ name: 'search' }">
          <icon
            :icon="['fas', 'search']"
            size="lg"
            :style="{ color: 'white' }"
          />
        </router-link>
      </div>
      <div class="cart d-inline ml-2">
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
</template>

<style scoped>
.navbar {
  background-color: #7bc1f9;
}
.cart {
  background-color: #4ba2e4;
  padding: 11px 11px 11px 9px;
  border-radius: 100%;
}
</style>
