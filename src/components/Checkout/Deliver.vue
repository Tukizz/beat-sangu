<template>
  <section class="container">
    <div class="row">
      <div class="col">
        <div class="media">
          <!-- <img src="..." class="mr-3" alt="..."> -->
          <icon
            class="mr-3 mt-1"
            :icon="['fas', 'map-marker-alt']"
            size="2x"
            :style="{ color: 'black' }"
          />
          <div class="media-body">
            <h5 class="m-0">Delivery Location</h5>
            <span>Antapani, Kota Bandung</span>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <icon
          class="mr-3 mt-2"
          :icon="['fas', 'ellipsis-v']"
          size="lg"
          :style="{ color: 'black' }"
        />
      </div>
    </div>
  </section>
</template>
