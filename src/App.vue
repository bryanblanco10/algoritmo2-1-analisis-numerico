<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from "@/components/header/Header";
export default {
  components: {
    Header
  }
}
</script>
<style>
  @import "./assets/css/style.css";
</style>
