<template>
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
            <icon
              class="ml-auto"
              :icon="['fas', 'times']"
              size="lg"
              style="color: black; position: inherit; left: 95%;"
            />
            <div class="media">
              <img
                src="@/assets/img/wanita/1.jpg"
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
              <router-link
                :to="{ name: 'detail' }"
                class="stretched-link"
              ></router-link>
            </div>
          </div>
          <div class="list-group-item pr-0 pl-0">
            <icon
              class="ml-auto"
              :icon="['fas', 'times']"
              size="lg"
              style="color: black; position: inherit; left: 95%;"
            />
            <div class="media">
              <img
                src="@/assets/img/pria/1.jpg"
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
              <router-link
                :to="{ name: 'detail' }"
                class="stretched-link"
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-group-item {
  background-color: transparent;
}
.badge-method {
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
