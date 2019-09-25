<template>
  <f7-page>
    <f7-navbar title="Accordion" back-link="Back"></f7-navbar>

    <f7-block-title>Accordion</f7-block-title>
    <f7-accordion>
      <f7-accordion-item>
        <f7-accordion-toggle>Item 1</f7-accordion-toggle>
        <f7-accordion-content>
          <f7-block>
            <p>Item 1 content...</p>
          </f7-block>
        </f7-accordion-content>
      </f7-accordion-item>

      <f7-accordion-item>
        <f7-accordion-toggle>Item 2</f7-accordion-toggle>
        <f7-accordion-content>
          <f7-block>
            <p>Item 2 content...</p>
          </f7-block>
        </f7-accordion-content>
      </f7-accordion-item>
    </f7-accordion>

    <f7-block-title>Separate Collapsible</f7-block-title>
    <f7-accordion-item>
      <f7-accordion-toggle>Item 1</f7-accordion-toggle>
      <f7-accordion-content>
        <f7-block>
          <p>Item 1 content...</p>
        </f7-block>
      </f7-accordion-content>
    </f7-accordion-item>

    <f7-accordion-item>
      <f7-accordion-toggle>Item 2</f7-accordion-toggle>
      <f7-accordion-content>
        <f7-block>
          <p>Item 2 content...</p>
        </f7-block>
      </f7-accordion-content>
    </f7-accordion-item>

    <f7-block-title>Accordion List</f7-block-title>
    <f7-list accordion>
      <f7-list-item accordion-item title="Accordion Item 1">
        <f7-accordion-content>
          <f7-block>
            <p>Accordion Item 1 Content</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>

      <f7-list-item accordion-item title="Accordion Item 2">
        <f7-accordion-content>
          <f7-block>
            <p>Accordion Item 2 Content</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>
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
  f7AccordionContent,
  f7Block,
  f7List,
  f7ListItem
} from 'framework7-vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7BlockTitle,
    f7Accordion,
    f7AccordionItem,
    f7AccordionToggle,
    f7AccordionContent,
    f7Block,
    f7List,
    f7ListItem
  }
};
</script>
