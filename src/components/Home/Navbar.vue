<template>
  <nav class="navbar navbar-light bg-light shadow-sm">
    <div class="col-auto pl-0 pt-2 pb-1">
      <a href="#" class="mr-2">
        <icon :icon="['fas', 'bars']" size="lg" :style="{ color: 'black' }" />
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
            :style="{ color: 'black' }"
          />
        </router-link>
      </div>
      <div class="search d-inline ml-2">
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
.search {
  background-color: #ebe8e8;
  padding: 11px 11px 11px 9px;
  border-radius: 100%;
}
</style>
