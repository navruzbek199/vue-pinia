<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView} from 'vue-router'

</script>

<template>
  <div class="app">
    <Header />
  </div>
  <router-view/>
</template>

<style scoped>

</style>
