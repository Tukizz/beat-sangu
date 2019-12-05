<template>
  <section class="container">
    <div v-if="AddBtn" id="myModal" class="modal-add">
      <div class="modal-add-content">
        <div class="text-right" @click="toggleAdd">
          <icon
            class=""
            :icon="['fas', 'times']"
            size="sm"
            :style="{ color: 'black' }"
          />
        </div>

        <div class="modal-add-body">
          <div class="list-group">
            <div class="form-group">
              <label for="alamat">Alamat</label>
              <input
                id="alamat"
                class="form-control"
                type="text"
                v-model="alamat"
              />
            </div>
            <button class="btn btn-pay" @click="toggleAdd">OK</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="media">
          <icon
            class="mr-3 mt-1"
            :icon="['fas', 'map-marker-alt']"
            size="2x"
            :style="{ color: 'black' }"
          />
          <div class="media-body">
            <h5 class="m-0">Delivery Location</h5>
            <span>{{ alamat }}</span>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <button @click="toggleAdd" class="btn btn-add p-0">
          <icon
            class="m-2"
            :icon="['fas', 'ellipsis-v']"
            size="lg"
            :style="{ color: 'black' }"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      AddBtn: false,
      alamat: ""
    };
  },
  methods: {
    toggleAdd() {
      this.AddBtn = !this.AddBtn;
    }
  }
};
</script>

<style scoped>
.btn-pay {
  background-color: #7bc1f9;
  color: #fff;
}
.modal-add {
  position: fixed; /* Stay in place */
  z-index: 9999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;
}

/* Modal Content */
.modal-add-content {
  position: fixed;
  bottom: 0px;
  background-color: #fefefe;
  width: 100%;
  padding: 20px;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;
}

.modal-add-body {
  padding-bottom: 20px;
}

/* Add Animation */
@-webkit-keyframes slideIn {
  from {
    bottom: -700px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    bottom: -700px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
