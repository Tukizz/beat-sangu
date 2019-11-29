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

    <div class="fixed-bottom shadow-lg">
      <div class="card border-0">
        <div class="container">
          <div class="card-body">
            <div class="row">
              <h5>Rp. 416.000&nbsp;</h5>
              <span class="ml-1 badge-method">Alfamart</span>
            </div>
            <div class="row">
              <button
                class="btn btn-success btn-block font-weight-bold rounded-lg"
              >
                BAYAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
