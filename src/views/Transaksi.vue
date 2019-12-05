<template>
  <main>
    <nav class="fixed-top navbar shadow-sm">
      <div class="col-auto pl-0 pt-2 pb-2">
        <a class="mr-2" @click="$router.push('/')">
          <icon
            :icon="['fas', 'arrow-left']"
            size="lg"
            :style="{ color: 'white' }"
          />
        </a>
        <h5 class="d-inline-block ml-3 m-0 align-top text-white">
          Transaksi Pembayaran
        </h5>
      </div>
    </nav>

    <section class="mt-5 pt-4">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h6>Kode Pembayaran</h6>
            <h3 style="background-color:#dcdfe8;">12345567890</h3>
            <small
              >Segeralah melakukan pembayaran dengan metode pembayaran yang
              telah anda pilih sebelumnya</small
            >
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                No Resi
                <small>ABC9809890CKIL</small>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Total Harga
                <small>Rp. 416.000-,</small>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Status
                <small>Paid</small>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Metode Pembayaran
                <small>Alfamart</small>
              </li>
            </ul>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col text-center">
            <small
              >Mohon agar halamana ini di <b>screenshoot</b> terlebih dahulu
              sebelum meninggalkan halaman ini, dikarenakan web yang anda pakai
              tidak menyimpan informasi transaksi anda Terimakasih</small
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.list-group-item {
  background-color: transparent;
}
.navbar {
  background-color: #7bc1f9;
}
</style>
