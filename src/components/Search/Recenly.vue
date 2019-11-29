<template>
  <section class="container mb-5">
    <div class="row align-items-center">
      <div class="col-6">
        <h4>RECENTLY</h4>
      </div>
      <div class="col-6 text-right">
        <small class="text-muted">Clear All</small>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="list-group list-group-flush">
          <router-link
            :to="{
              name: 'searchResult',
              params: { message: 'Baju Aldidas' }
            }"
            class="list-group-item list-group-item-action"
            >Baju Aldidas</router-link
          >
          <router-link
            :to="{
              name: 'searchResult',
              params: { message: 'Ronaldi T-shirt' }
            }"
            class="list-group-item list-group-item-action"
            >Ronaldi T-shirt</router-link
          >
          <router-link
            :to="{
              name: 'searchResult',
              params: { message: 'Celana Pendek' }
            }"
            class="list-group-item list-group-item-action"
            >Celana Pendek</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-group-item {
  background-color: transparent;
}
</style>
