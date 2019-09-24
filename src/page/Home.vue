<template>
  <f7-page>
    <f7-navbar title="Framework7">
      <f7-nav-right>
        <f7-link></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-list class="searchbar-hide-on-search">
      <f7-list-item title="About Framework7" link="/about/"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import {
  f7Page,
  f7Navbar,
  f7NavRight,
  f7Link,
  f7List,
  f7ListItem
} from "framework7-vue";

export default {
  components: {
    f7Page,
    f7Navbar,
    f7NavRight,
    f7Link,
    f7List,
    f7ListItem
  }
};
</script>
