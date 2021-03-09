<template>
  <main class="container">
    <ItemInput @onAddItem="addItem"></ItemInput>

    <draggable v-model="itemList" item-key="id">
      <template #item="{element}">
        <ListItem
          :model="element"
          @onToggle="toggleItemStatus(element.id)"
          @onDelete="deleteItem(element.id)"
          @onEdit="editItem($event, element.id)"
        ></ListItem>
      </template>
    </draggable>
  </main>
</template>

<script lang="ts">
  import { ref, defineComponent } from "vue";
  import draggable from "vuedraggable";
  import ListItem from "./components/ListItem.vue";
  import ItemInput from "./components/ItemInput.vue";

  export default defineComponent({
    name: "App",
    components: {
      ListItem,
      ItemInput,
      draggable,
    },
    setup() {
      interface ListItem {
        id: number;
        content: string;
        status: boolean;
      }

      interface List {
        name: string;
        items: ListItem[];
      }

      interface Data {
        activeListId: number;
        lists: List[];
      }

      const itemList = ref<ListItem[]>([
        { id: 0, content: "Unchecked Task", status: false },
        { id: 1, content: "Another Unchecked Task", status: false },
        { id: 2, content: "Checked Task", status: true },
      ]);

      function getNextItemId(): number {
        let nextItemId = 1;

        if (itemList.value.length > 0) {
          nextItemId =
            itemList.value.reduce((p, c) => (p.id > c.id ? p : c)).id + 1;
        }
        return nextItemId;
      }

      function addItem(content: string) {
        if (content == "") return;
        itemList.value = [
          { id: getNextItemId(), content: content, status: false },
          ...itemList.value,
        ];
      }

      function toggleItemStatus(id: number) {
        itemList.value = itemList.value.map((x) => {
          if (x.id === id) x.status = !x.status;
          return x;
        });
      }

      function deleteItem(id: number) {
        itemList.value = itemList.value.filter((x) => x.id !== id);
      }

      function editItem(content: string, id: number) {
        itemList.value.find((x) => x.id === id)!.content = content;
      }

      return {
        itemList,
        addItem,
        toggleItemStatus,
        deleteItem,
        editItem,
      };
    },
  });
</script>
<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
</style>
