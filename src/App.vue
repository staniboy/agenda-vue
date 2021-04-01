<template>
  <main class="container">
    <ItemInput @onAddItem="addItem"></ItemInput>

    <draggable v-model="data.itemList" item-key="id" handle=".handle">
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
  import { defineComponent, reactive, onMounted } from "vue";
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
    watch: {
      data: {
        handler(data) {
          localStorage.itemList = JSON.stringify(data.itemList);
        },
        deep: true,
      },
    },

    setup() {
      interface ListItemType {
        id: number;
        content: string;
        status: boolean;
      }

      const data = reactive({
        itemList: [
          { id: 0, content: "Unchecked Task", status: false },
          { id: 1, content: "Another Unchecked Task", status: false },
          { id: 2, content: "Checked Task", status: true },
        ],
      });

      onMounted(() => {
        if (localStorage.itemList) {
          data.itemList = JSON.parse(localStorage.itemList);
        }
      });

      function getNextItemId(): number {
        let nextItemId = 1;

        if (data.itemList.length > 0) {
          nextItemId =
            data.itemList.reduce((p, c) => (p.id > c.id ? p : c)).id + 1;
        }
        return nextItemId;
      }

      function addItem(content: string) {
        if (content == "") return;
        data.itemList = [
          { id: getNextItemId(), content: content, status: false },
          ...data.itemList,
        ];
      }

      function toggleItemStatus(id: number) {
        data.itemList = data.itemList.map((x) => {
          if (x.id === id) x.status = !x.status;
          return x;
        });
      }

      function deleteItem(id: number) {
        data.itemList = data.itemList.filter((x: any) => x.id !== id);
      }

      function editItem(newContent: string, id: number) {
        data.itemList.find((x: any) => x.id === id)!.content = newContent;
      }
      return {
        data,
        getNextItemId,
        addItem,
        toggleItemStatus,
        deleteItem,
        editItem,
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
