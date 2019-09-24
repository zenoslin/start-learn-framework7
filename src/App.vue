<template>
  <div id="app">
    <f7-statusbar></f7-statusbar>
    <f7-panel left cover></f7-panel>
    <f7-panel right reveal></f7-panel>
    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </div>
</template>

<script>
import { f7Panel, f7View, f7Statusbar } from "framework7-vue";

export default {
  name: "app",
  components: {
    f7Panel,
    f7View,
    f7Statusbar
  }
};
</script>
