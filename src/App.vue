<script setup>
import Navbar from '@components/Navbar.vue'
import Footer from '@components/Footer.vue'
import Home from '@views/Home.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <Home />
    </main>
    <Footer />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}

main {
  position: relative;
}
</style>
