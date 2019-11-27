<template>
  <main>
    <Navbar />
    <Event />
    <Category />
    <!-- <List/> -->
  </main>
</template>

<script>
import Navbar from "@/components/Home/Navbar";
import Event from "@/components/Home/Event";
import Category from "@/components/Home/Category";
// import List from '@/components/home/List'

export default {
  name: "home",
  components: {
    Navbar,
    Event,
    Category
    // List
  }
};
</script>
