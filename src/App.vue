
<template>
  <div class="container"> 
     <router-view />
     <Footer />
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/HomeViewComponents/Footer.vue'
  </script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
*, *::before, *::after{
  font-family: inter;
}
</style>
