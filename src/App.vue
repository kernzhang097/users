<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import appHeader from '@/components/header/Header'
export default {
  name: 'App',
  components: {
    appHeader
  }
}
</script>

<style>

</style>
