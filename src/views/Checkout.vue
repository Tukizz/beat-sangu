<template>
  <main style="margin-bottom:25vh; margin-top:12vh;">
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

    <section class="container mt-4">
      <div class="row">
        <div class="col">
          <h4 class="m-0">Order Item</h4>
        </div>
        <div class="col-auto">
            <router-link :to="{ name: 'home' }">
                <span class="text-dark">+ Add More</span>
            </router-link>
        </div>
      </div>
      <div style="border-bottom: 1px solid black; margin-top:10px;"></div>

      <div class="row">
        <div class="col">
          <div class="list-group list-group-flush">
            <div class="list-group-item pr-0 pl-0">
              <div class="media">
                <img
                  src="@/assets/img/baju-full.jpg"
                  width="110"
                  style="border-radius:20px;"
                  class="mr-3"
                  alt="baju"
                />
                <div class="media-body">
                  <h6 class="mt-2">Kaos Polos Biru</h6>
                  <span class="badge badge-check mt-1">S</span>
                  <span class="badge-pink mt-3"></span>
                  <h6 class="d-block mt-4">Rp. 100.000</h6>
                </div>
              </div>
            </div>
            <div class="list-group-item pr-0 pl-0">
              <div class="media">
                <img
                  src="@/assets/img/baju2.jpg"
                  width="110"
                  style="border-radius:20px;"
                  class="mr-3"
                  alt="baju"
                />
                <div class="media-body">
                  <h6 class="mt-2">Kemeja Dongker</h6>
                  <span class="badge badge-check mt-1">S</span>
                  <span class="badge-pink mt-3"></span>
                  <h6 class="d-block mt-4">Rp. 300.000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-4">
      <div class="row">
        <div class="col">
          <h4 class="m-0">Payment Detail</h4>
        </div>
      </div>
      <div style="border-bottom: 1px solid black; margin-top:10px;"></div>
      <div class="row mt-3">
        <div class="col">
          <h6>Payment Method</h6>
        </div>
        <div class="col-auto">
          <h6 class="d-inline mr-2">Alfamart</h6>
          <icon
            :icon="['fas', 'ellipsis-v']"
            size="sm"
            :style="{ color: 'black' }"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h6>Price</h6>
        </div>
        <div class="col-auto">
          <h6>400.000</h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h6>Store Fee</h6>
        </div>
        <div class="col-auto">
          <h6>5.000</h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h6>Delivery</h6>
        </div>
        <div class="col-auto">
          <h6>11.000</h6>
        </div>
      </div>
      <div style="border-bottom: 1px solid black; margin-top:10px;"></div>
      <div class="row mt-3">
        <div class="col">
          <h4>Total</h4>
        </div>
        <div class="col-auto">
          <h4>Rp. 416.000</h4>
        </div>
      </div>
    </section>

    <section class="fixed-bottom shadow-lg">
      <div class="card border-0">
        <div class="container">
          <div class="card-body">
            <div class="row">
              <h5>Rp. 416.000&nbsp;</h5><span class="ml-1 badge-method">Alfamart</span>
            </div>
            <div class="row">
              <button class="btn btn-success btn-block font-weight-bold rounded-lg">
                BAYAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.badge-method{
  background-color: #bdbdbd;
  border-radius: 10px;
  padding: 2px 0.6em;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #4f4f4f;
}
.badge-pink {
  height: 20px;
  width: 20px;
  background-color: #f48fb1;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: 3px;
}
.badge-check {
  margin-right: 7px;
  margin-top: 10px;
  border: solid #bdbdbd 2px;
  border-radius: 10px;
  padding: 8px 0.7em;
  font-size: 15px;
  font-weight: bold;
  color: #4f4f4f;
}
</style>
