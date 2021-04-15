<template>
  <main class="container">
    <Navbar
      :phrase="randomPhrase"
      :lists="data.lists"
      @onSetList="setCurrentList($event)"
      @onAddItem="addItem"
      @onClearList="clearList"
      @onDeleteChecked="deleteChecked"
      @onResetChecked="resetChecked"
    ></Navbar>
    <!--TODO: fix this mess-->
    <p>{{ data.currentList.name }}</p>
    <p class="text-center fs-3 py-5" v-if="data.currentList.items.length === 0">
      List is empty
    </p>
    <!---->
    <draggable
      v-else
      v-model="data.currentList.items"
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
  import { defineComponent, reactive, onMounted, computed } from "vue";
  import draggable from "vuedraggable";
  import ListItem from "./components/ListItem.vue";
  import Navbar from "./components/Navbar.vue";

  export default defineComponent({
    name: "App",
    components: {
      ListItem,
      Navbar,
      draggable,
    },
    watch: {
      data: {
        handler(data) {
          localStorage.lists = JSON.stringify(data.lists);
        },
        deep: true,
      },
    },
    setup() {
      interface Item {
        id: number;
        dateAdded: string;
        content: string;
        status: boolean;
      }

      interface List {
        id: number;
        name: string;
        items: Array<Item>;
      }

    
      const data = reactive({
        phrases: [
          "Hello?",
          "Do something...",
          "I'm alive",
          "Guess what?",
          "Chicken butt!",
        ],
        currentList: {
          id: 0,
          name: "First To-Do List",
          items: [
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
        },
        lists: [
          {
            id: 0,
            name: "First To-Do List",
            items: [
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
          },
          {
            id: 1,
            name: "Second To-Do List",
            items: [
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
          },
        ],
      });
      const randomPhrase = computed(() => {
        return data.phrases[Math.floor(Math.random() * data.phrases.length)];
      });

      onMounted(() => {
        if (localStorage.lists) {
          data.lists = JSON.parse(localStorage.lists);
        }
      });

      function setCurrentList(list: List) {
        console.log("list id is: " + list.id);
        data.currentList = list;
        console.log(data.currentList, data.lists);
      }
      function clearList() {
        data.currentList.items = [];
      }

      function deleteChecked() {
        data.currentList.items = data.currentList.items.filter(
          (x) => x.status !== true
        );
      }

      function resetChecked() {
        data.currentList.items = data.currentList.items.map((x) => {
          x.status = false;
          return x;
        });
      }

      function getNextItemId(): number {
        let nextItemId = 1;

        if (data.currentList.items.length > 0) {
          nextItemId =
            data.currentList.items.reduce((p, c) => (p.id > c.id ? p : c)).id +
            1;
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
        data.currentList.items = [
          {
            id: getNextItemId(),
            dateAdded: currentDate(),
            content: content,
            status: false,
          },
          ...data.currentList.items,
        ];
      }

      function toggleItemStatus(id: number) {
        data.currentList.items = data.currentList.items.map((x) => {
          if (x.id === id) x.status = !x.status;
          return x;
        });
      }

      function deleteItem(id: number) {
        data.currentList.items = data.currentList.items.filter(
          (x) => x.id !== id
        );
      }

      function editItem(newContent: string, id: number) {
        data.currentList.items.find((x) => x.id === id)!.content = newContent;
      }
      return {
        data,
        randomPhrase,
        setCurrentList,
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
