<template>
  <main style="margin-bottom:25vh; margin-top:12vh;">
    <Navbar />
    <Deliver />
    <Order />
    <Payment />
  </main>
</template>

<script>
import Navbar from "@/components/Keranjang/Navbar";
import Deliver from "@/components/Keranjang/Deliver";
import Order from "@/components/Keranjang/OrderItem";
import Payment from "@/components/Keranjang/Payment";

export default {
  components: {
    Navbar,
    Deliver,
    Order,
    Payment
  }
};
</script>
