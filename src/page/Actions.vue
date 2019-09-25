<template>
  <f7-page>
    <f7-navbar title="Actions" back-link="Back"></f7-navbar>
    <f7-block-title>Actions</f7-block-title>

    <f7-button @click="showActions">Show Actions</f7-button>

    <f7-actions id="actions" :opened="isShowActions">
      <f7-actions-group>
        <f7-actions-label>Hello</f7-actions-label>
        <f7-actions-button>Button 1</f7-actions-button>
        <f7-actions-button @click="handleClick">Button 2</f7-actions-button>
      </f7-actions-group>

      <f7-actions-group>
        <f7-actions-button color="red" bold>Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>
  </f7-page>
</template>

<script>
import {
  f7Page,
  f7Navbar,
  f7BlockTitle,
  f7Actions,
  f7ActionsGroup,
  f7ActionsLabel,
  f7ActionsButton,
  f7Button
} from 'framework7-vue';
export default {
  name: 'Actions',
  data() {
    return {
      isShowActions: false
    };
  },
  computed: {
    actionsIns() {
      return this.$f7.actions.get(this.$$('#actions'));
    }
  },
  components: {
    f7Page,
    f7Navbar,
    f7BlockTitle,
    f7Actions,
    f7ActionsGroup,
    f7ActionsLabel,
    f7ActionsButton,
    f7Button
  },
  methods: {
    handleClick() {
      console.log(`f7-actions-button click!`);
    },
    showActions() {
      /** use Action Sheet API */
      // console.log(`actions ins`, this.actionsIns);
      // this.actionsIns.open();

      /** use opened prop */
      this.isShowActions = true;
    }
  },
  mounted() {
    this.actionsIns.on('closed', () => {
      console.log(`hide actions`);
      this.isShowActions = false;
    });
  }
};
</script>