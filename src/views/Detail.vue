<template>
  <main style="margin-top:50px;">
    <Navbar />
    <Slide />
    <Descrip />
  </main>
</template>

<script>
import Navbar from "@/components/Detail/Navbar";
import Slide from "@/components/Detail/Slide";
import Descrip from "@/components/Detail/Descrip";

export default {
  name: "detail",
  components: {
    Navbar,
    Slide,
    Descrip
  }
};
</script>
