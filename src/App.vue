<template>
  <main class="container">
    <Navbar
    ></Navbar>
    <!--TODO: fix this mess-->
    <!-- <p>{{ data.currentList.name }}</p> -->
    <p class="text-center fs-3 py-5" v-if="currentList.items.length === 0">
      List is empty
    </p>
    <!---->
    <draggable
      v-else
      v-model="currentList.items"
      item-key="id"
      handle=".app-list-item-handle"
    >
      <template #item="{element}">
        <ListItem
          :model="element"
        ></ListItem>
      </template>
    </draggable>
  </main>
</template>

<script lang="ts">
  import getNextAvailableId from "./store/utils";
  import { List, Item } from "./types";
  import { defineComponent, reactive, onMounted } from "vue";
  import draggable from "vuedraggable";
  import ListItem from "./components/ListItem.vue";
  import Navbar from "./components/Navbar.vue";
  import { useStore } from "vuex";

  export default defineComponent({
    name: "App",
    components: {
      ListItem,
      Navbar,
      draggable,
    },
    setup() {
      const store = useStore();
      const currentList = store.getters.getListById(1);

      function currentDate(): string {
        const currentDate = new Date();
        const cDay = currentDate.getDate();
        const cMonth = currentDate.getMonth() + 1;
        const cYear = currentDate.getFullYear();
        return cDay + "/" + cMonth + "/" + cYear;
      }

      return {
        currentList,
        currentDate,
        getNextAvailableId,
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

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
</style>
