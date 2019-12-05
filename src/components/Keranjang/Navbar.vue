<template>
  <nav class="fixed-top navbar shadow-sm">
    <div class="col-auto pl-0 pt-2 pb-2">
      <a class="mr-2" @click="$router.go(-1)">
        <icon
          :icon="['fas', 'arrow-left']"
          size="lg"
          :style="{ color: 'white' }"
        />
      </a>
      <h5 class="d-inline-block ml-3 m-0 align-top text-white">
        Keranjang Saya
      </h5>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #7bc1f9;
}
</style>
