<template>
  <nav class="fixed-top navbar navbar-light bg-light shadow-sm">
    <div class="col-auto pl-0 pt-2 pb-2">
      <a href="#" class="mr-2" @click="$router.go(-1)">
        <icon
          :icon="['fas', 'arrow-left']"
          size="lg"
          :style="{ color: 'black' }"
        />
      </a>
      <h5 class="d-inline-block ml-3 m-0 align-top">
        Keranjang Saya
      </h5>
    </div>
  </nav>
</template>
