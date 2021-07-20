<template>
  <nav class="container"><Navbar></Navbar></nav>
  <main class="container">
    <!-- <p>{{ data.currentList.name }}</p> -->
    <draggable v-model="currentList" item-key="id" handle=".handle">
      <template #item="{element}">
        <ListItem :listId="0" :model="element"></ListItem>
      </template>
    </draggable>
    <AddItem :listId="0"></AddItem>
  </main>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import draggable from "vuedraggable";
  import ListItem from "./components/ListItem.vue";
  import Navbar from "./components/Navbar.vue";
  import { useStore } from "vuex";
  import AddItem from "./components/AddItem.vue";

  export default defineComponent({
    name: "App",
    components: {
      ListItem,
      AddItem,
      Navbar,
      draggable,
    },
    setup() {
      const store = useStore();
      const currentList = computed({
        get: () => store.getters.getListItemsById(0),
        set: (newListItems) =>
          store.commit("UPDATE_LIST_ITEMS", { id: 0, newListItems }),
      });

      return {
        currentList,
      };
    },
  });
</script>
<style lang="scss">
  $theme-colors: (
    "primary": #000000,
    "danger": #ff4136,
  );
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  nav.container {
      padding: 0 !important;
    }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
</style>
