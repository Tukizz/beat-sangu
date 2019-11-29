<template>
  <main style="margin-bottom:20vh; margin-top:13vh;">
    <Navbar />
    <Recent />
    <Recome />
    <Popular />
  </main>
</template>

<script>
import Navbar from "@/components/Search/Navbar";
import Recent from "@/components/Search/Recenly";
import Recome from "@/components/Search/Recommend";
import Popular from "@/components/Search/Popular";
export default {
  components: {
    Navbar,
    Recent,
    Recome,
    Popular
  }
};
</script>

<style scoped>
.content {
  padding-top: 2rem;
}
</style>
