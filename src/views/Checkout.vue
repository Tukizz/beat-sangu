<template>
  <main style="margin-bottom:25vh; margin-top:12vh;">
    <Navbar />
    <Deliver />
    <Order />
    <Payment />
  </main>
</template>

<script>
import Navbar from "@/components/Checkout/Navbar";
import Deliver from "@/components/Checkout/Deliver";
import Order from "@/components/Checkout/OrderItem";
import Payment from "@/components/Checkout/Payment";

export default {
  components: {
    Navbar,
    Deliver,
    Order,
    Payment
  }
};
</script>
