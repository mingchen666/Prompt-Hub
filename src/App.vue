<script setup>
import { RouterView } from 'vue-router'
import WebHeader from './components/WebHeader.vue'
import WebFooter from './components/WebFooter.vue'
</script>

<template>
  <web-header></web-header>

  <RouterView />
  <web-footer></web-footer>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */
</style>
