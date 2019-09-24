<template>
  <f7-page>
    <f7-navbar title="Accordion" back-link="Back"></f7-navbar>

    <f7-block-title>Accordion</f7-block-title>
    <f7-accordion>
      <f7-accordion-item>
        <f7-accordion-toggle>Item 1</f7-accordion-toggle>
        <f7-accordion-content>Item 1 content...</f7-accordion-content>
      </f7-accordion-item>

      <f7-accordion-item>
        <f7-accordion-toggle>Item 2</f7-accordion-toggle>
        <f7-accordion-content>Item 2 content...</f7-accordion-content>
      </f7-accordion-item>
    </f7-accordion>
  </f7-page>
</template>

<script>
import {
  f7Page,
  f7Navbar,
  f7BlockTitle,
  f7Accordion,
  f7AccordionItem,
  f7AccordionToggle,
  f7AccordionContent
} from "framework7-vue";

export default {
  components: {
    f7Page,
    f7Navbar,
    f7BlockTitle,
    f7Accordion,
    f7AccordionItem,
    f7AccordionToggle,
    f7AccordionContent
  }
};
</script>
