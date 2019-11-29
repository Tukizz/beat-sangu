<template>
  <section class="container mb-5">
    <div class="row">
      <div class="col">
        <h3>POPULAR</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link
          :to="{ name: 'searchResult', params: { message: 'Celana Dalam' } }"
          class="badge badge-search"
          >Celana Dalam</router-link
        >
        <router-link
          :to="{ name: 'searchResult', params: { message: 'Tas Gucci' } }"
          class="badge badge-search"
          >Tas Gucci</router-link
        >
        <router-link
          :to="{ name: 'searchResult', params: { message: 'Kaos Kaki' } }"
          class="badge badge-search"
          >Kaos Kaki</router-link
        >
        <router-link
          :to="{ name: 'searchResult', params: { message: 'Jaket Jeans' } }"
          class="badge badge-search"
          >Jaket Jeans</router-link
        >
        <router-link
          :to="{ name: 'searchResult', params: { message: 'Celana Pendek' } }"
          class="badge badge-search"
          >Celana Pendek</router-link
        >
        <router-link
          :to="{ name: 'searchResult', params: { message: 'Baju Joker' } }"
          class="badge badge-search"
          >Baju Joker</router-link
        >
        <router-link
          :to="{ name: 'searchResult', params: { message: 'Sweater Biru' } }"
          class="badge badge-search"
          >Sweater Biru</router-link
        >
        <router-link
          :to="{ name: 'searchResult', params: { message: 'Kaos Z' } }"
          class="badge badge-search"
          >Kaos Z</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.badge-search {
  margin-right: 7px;
  margin-top: 10px;
  border: solid #bdbdbd 1px;
  border-radius: 10px;
  padding: 5px 5%;
  color: #4f4f4f;
}
</style>
