<template>
  <main style="margin-top:50px;">
    <nav class="navbar fixed-top navbar-light bg-light shadow-sm">
      <div class="col-auto pl-0 pt-2 pb-2">
        <a href="#" class="mr-2" @click="$router.go(-1)">
          <icon :icon="['fas', 'arrow-left']" size="lg" :style="{ color: 'black' }" />
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
    <Slide />
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <img src="@/assets/Brand.svg" />
        </div>
        <div class="col-6 text-right">
          <h4>Rp. 100.000</h4>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <h4>Baju Polos Catton</h4>
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <p>
            Baju ini cocok digunakan casual, bisa dipakai main atau kegiatan
            lainnya
          </p>
        </div>
      </div>
      <div style="border-bottom: 1px solid black;"></div>
      <div class="row mt-3">
        <div class="col">
          <h5>Select Size</h5>
          <div class="row">
            <div class="col">
              <div class="radio-toolbar">
                <div class="size-input">
                  <input type="radio" id="s" name="size" value="s" />
                  <label for="s">S</label>
                </div>

                <div class="size-input">
                  <input type="radio" id="m" name="size" value="m" />
                  <label for="m">M</label>
                </div>

                <div class="size-input">
                  <input type="radio" id="l" name="size" value="l" />
                  <label for="l">L</label>
                </div>

                <div class="size-input">
                  <input
                    type="radio"
                    id="xl"
                    name="size"
                    value="xl"
                  />
                  <label for="xl">XL</label>
                </div>

                <div class="size-input">
                  <input
                    type="radio"
                    id="xxl"
                    name="size"
                    value="xxl"
                  />
                  <label for="xxl">XXL</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="border-bottom: 1px solid black; margin-top:10px;"></div>
      <div class="row mt-3">
        <div class="col">
          <h5>Color</h5>
          <div class="row">
            <div class="col">
              <div class="radio-color">
                <div class="color-input">
                  <input type="radio" id="pink" name="color" value="pink" />
                  <label class="pink" for="pink"></label>
                </div>

                <div class="color-input">
                  <input type="radio" id="blue" name="color" value="blue" />
                  <label class="blue" for="blue"></label>
                </div>

                <div class="color-input">
                  <input type="radio" id="black" name="color" value="black" />
                  <label class="black" for="black"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3 mb-4">
        <div class="col">
          <button
            class="btn btn-block"
            style="background-color:#C4C4C4; border-radius:20px; font-weight:bold;"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Slide from "@/components/Detail/Slide";

export default {
  name: "detail",
  components: {
    Slide
  }
};
</script>

<style scoped>

.cart {
  background-color: #ece8e8;
  padding: 11px 11px 11px 9px;
  border-radius: 100%;
}

.color-input {
  margin-right: 10px;
  display: inline-block;
}

.radio-color input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}
.radio-color label.pink {
  display: inline-block;
  width:25px;
  height:25px;
  background-color: #F48FB1;
  font-weight: bold;
  border-radius: 50%;
}
.radio-color label.pink:hover {
  background-color: #B56882;
}

.radio-color input[type="radio"]:checked + label.blue {
  background-color: #B56882;
  border-color: #F48FB1;
}

.radio-color label.blue {
  display: inline-block;
  width:25px;
  height:25px;
  background-color: #2196F3;
  font-weight: bold;
  border-radius: 50%;
}
.radio-color label.blue:hover {
  background-color: #1E70B1;
}

.radio-color input[type="radio"]:checked + label.blue {
  background-color: #1E70B1;
  border-color: #2196F3;
}

.radio-color label.black {
  display: inline-block;
  width:25px;
  height:25px;
  background-color: #37474F;
  font-weight: bold;
  border-radius: 50%;
}
.radio-color label.black:hover {
  background-color: #1A2226;
}

.radio-color input[type="radio"]:checked + label.black {
  background-color: #1A2226;
  border-color: #37474F;
}

.size-input {
  margin-right: 10px;
  display: inline-block;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}
.radio-toolbar label {
  display: inline-block;
  padding: 5px 10px;
  border: 2px solid #b0b0b0;
  font-weight: bold;
  border-radius: 6px;
}
.radio-toolbar label:hover {
  background-color: #dfd;
}
.radio-toolbar input[type="radio"]:checked + label {
  background-color: #bfb;
  border-color: #4c4;
}
</style>
