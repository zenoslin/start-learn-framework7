<template>
  <f7-view id="app">
    <f7-page>
      <f7-link href="/about/">About</f7-link>
      <f7-link href="/login/">Login</f7-link>
    </f7-page>
  </f7-view>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
