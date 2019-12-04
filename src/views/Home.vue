<template>
  <main>
    <Navbar />
    <Event />
    <List />
  </main>
</template>

<script>
import Navbar from "@/components/Home/Navbar";
import Event from "@/components/Home/Event";
import List from "@/components/Home/List";

export default {
  name: "home",
  components: {
    Navbar,
    Event,
    List
  }
};
</script>
