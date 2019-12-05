<template>
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
        <select class="option-payment" v-model="payment">
          <!-- <option selected disabled>Pilih</option> -->
          <option>Alfamart</option>
          <option>Indomaret</option>
          <option>Transfer</option>
        </select>
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

    <div class="fixed-bottom shadow-lg">
      <div class="card border-0">
        <div class="container">
          <div class="card-body">
            <div class="row">
              <h5>Rp. 416.000&nbsp;</h5>
              <span class="ml-1 badge-method">{{ payment }}</span>
            </div>
            <div class="row">
              <router-link
                :to="{ name: 'transaksi' }"
                class="btn btn-pay btn-block font-weight-bold rounded-lg"
                >BAYAR</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      payment: ""
    };
  }
};
</script>

<style scoped>
.option-payment {
  background-color: transparent;
  border-color: transparent;
  font-size: 1rem;
  /* appearance:none; */
  width: 100%;
}
.badge-method {
  background-color: #4ba2e4;
  color: #fff;
  border-radius: 10px;
  padding: 1px 6px;
  margin-bottom: 10px;
}
.btn-pay {
  background-color: #7bc1f9;
  color: #fff;
}
</style>
