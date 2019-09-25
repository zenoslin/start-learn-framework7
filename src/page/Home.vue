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

    <f7-block-title class="searchbar-found">Components</f7-block-title>
    <f7-list class="components-list searchbar-found">
      <f7-list-item link="/accordion/" title="Accordion"></f7-list-item>
      <f7-list-item link="/actions/" title="Actions"></f7-list-item>
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
  f7ListItem,
  f7BlockTitle
} from "framework7-vue";

export default {
  components: {
    f7Page,
    f7Navbar,
    f7NavRight,
    f7Link,
    f7List,
    f7ListItem,
    f7BlockTitle
  }
};
</script>
