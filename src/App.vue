<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView  :key="$route.path"/>
</template>

<style>
nav a.router-link-exact-active {
  color: #991b1b;
}
</style>