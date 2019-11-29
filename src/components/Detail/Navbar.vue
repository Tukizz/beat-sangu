<template>
  <nav class="navbar fixed-top navbar-light bg-light shadow-sm">
    <div class="col-auto pl-0 pt-2 pb-2">
      <a class="mr-2" @click="$router.go(-1)">
        <icon
          :icon="['fas', 'arrow-left']"
          size="lg"
          :style="{ color: 'black' }"
        />
      </a>
    </div>
    <div class="col-auto pr-0">
      <div class="cart d-inline ml-2">
        <router-link :to="{ name: 'checkout' }">
          <icon
            :icon="['fas', 'shopping-cart']"
            size="lg"
            :style="{ color: 'black' }"
          />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.cart {
  background-color: #ece8e8;
  padding: 11px 11px 11px 9px;
  border-radius: 100%;
}
</style>
