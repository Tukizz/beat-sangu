<template>
  <nav class="navbar navbar-light bg-light shadow-sm">
    <div class="col-auto pt-2 pb-1">
      <a href="#">
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
    <div class="col-auto">
      <div class="search d-inline mr-1">
        <a href="#">
          <icon
            :icon="['fas', 'search']"
            size="lg"
            :style="{ color: 'black' }"
          />
        </a>
      </div>
      <div class="search d-inline ml-2">
        <a href="#">
          <icon
            :icon="['fas', 'shopping-cart']"
            size="lg"
            :style="{ color: 'black' }"
          />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.search {
  background-color: #ebe8e8;
  padding: 10px;
  border-radius: 100%;
}
</style>
