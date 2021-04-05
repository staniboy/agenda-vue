<template>
  <main class="container">
    <ItemInput
      :phrase="data.phrases[Math.floor(Math.random() * data.phrases.length)]"
      @onAddItem="addItem"
      @onClearList="clearList"
      @onDeleteChecked="deleteChecked"
      @onResetChecked="resetChecked"
    ></ItemInput>
    <p class="text-center fs-3 py-5" v-if="data.itemList.length === 0">
      List is empty
    </p>
    <draggable
      v-else
      v-model="data.itemList"
      item-key="id"
      handle=".app-list-item-handle"
    >
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
        phrases: [
          "Hello?",
          "Do something...",
          "I'm alive",
          "Guess what?",
          "Chicken butt!",
        ],
        itemList: [
          {
            id: 0,
            dateAdded: "1/20/2021",
            content: "Unchecked Task",

            status: false,
          },
          {
            id: 1,
            dateAdded: "1/20/2021",
            content: "Another Unchecked Task",

            status: false,
          },
          {
            id: 2,
            dateAdded: "1/20/2021",
            content: "Checked Task",

            status: true,
          },
        ],
      });

      onMounted(() => {
        if (localStorage.itemList) {
          data.itemList = JSON.parse(localStorage.itemList);
        }
      });

      function clearList() {
        data.itemList = [];
      }

      function deleteChecked() {
        data.itemList = data.itemList.filter((x) => x.status !== true);
      }

      function resetChecked() {
        data.itemList = data.itemList.map((x) => {
          x.status = false;
          return x;
        });
      }

      function getNextItemId(): number {
        let nextItemId = 1;

        if (data.itemList.length > 0) {
          nextItemId =
            data.itemList.reduce((p, c) => (p.id > c.id ? p : c)).id + 1;
        }
        return nextItemId;
      }

      function currentDate(): string {
        const currentDate = new Date();
        const cDay = currentDate.getDate();
        const cMonth = currentDate.getMonth() + 1;
        const cYear = currentDate.getFullYear();
        return cDay + "/" + cMonth + "/" + cYear;
      }

      function addItem(content: string) {
        if (content == "") return;
        data.itemList = [
          {
            id: getNextItemId(),
            dateAdded: currentDate(),
            content: content,
            status: false,
          },
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
        data.itemList = data.itemList.filter((x) => x.id !== id);
      }

      function editItem(newContent: string, id: number) {
        data.itemList.find((x) => x.id === id)!.content = newContent;
      }
      return {
        data,
        resetChecked,
        clearList,
        deleteChecked,
        currentDate,
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
