<script setup lang="ts">
import { RouterView} from 'vue-router'

</script>

<template>
  <div class="app">
    <slot></slot>
  </div>
  <router-view/>
</template>

<style scoped>

</style>
