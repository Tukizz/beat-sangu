<template>
  <main>
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
                  <input
                    type="radio"
                    id="s"
                    name="radioFruit"
                    value="apple"
                  />
                  <label for="s">S</label>
                </div>

                <div class="size-input">
                  <input type="radio" id="m" name="radioFruit" value="banana" />
                  <label for="m">M</label>
                </div>

                <div class="size-input">
                  <input type="radio" id="l" name="radioFruit" value="orange" />
                  <label for="l">L</label>
                </div>

                <div class="size-input">
                  <input
                    type="radio"
                    id="xl"
                    name="radioFruit"
                    value="orange"
                  />
                  <label for="xl">XL</label>
                </div>

                <div class="size-input">
                  <input
                    type="radio"
                    id="xxl"
                    name="radioFruit"
                    value="orange"
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
            <div class="col"></div>
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
