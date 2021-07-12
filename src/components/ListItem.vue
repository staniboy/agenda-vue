<template>
  <div class="app-list-item">
    <img
      class="app-list-item-handle"
      alt="grip"
      src="../assets/grip-vertical.svg"
    />
    <img
      class="app-list-item-button"
      alt="checkbox-unchecked"
      src="../assets/circle.svg"
      v-if="!model.status"
      @click="onToggle"
    />
    <img
      class="app-list-item-button"
      alt="checkbox-checked"
      src="../assets/check-circle.svg"
      v-else
      @click="onToggle"
    />
    <div class="d-flex flex-column justify-content-start flex-grow-1">
      <div class="d-inline-flex">
        <div
          class="app-list-item-content"
          contenteditable="true"
          @keydown.enter="onEdit"
          @blur="onEdit"
        >
          {{ model.text }}
        </div>
      </div>
      <div class="app-list-item-info">Added on: {{ model.dateAdded }}</div>
    </div>
    <img
      class="app-list-item-delete-button"
      alt="delete"
      src="../assets/x.svg"
      v-if="model.status"
      @click="onDelete"
    />
    <div v-else class="app-list-item-delete-button"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
import { useStore } from "vuex";

  export default defineComponent({
    props: {
      model: {
        required: true,
        default: {
          id: 0,
          dateAdded: "1/3/2021",
          text: "default task",
          status: false,
        },
      },
      listId: {
        type: Number,
        required: true,
      }
    },
    setup(props) {
      const store = useStore();

      function onToggle() {
        store.commit("TOGGLE_ITEM", {
          listId: props.listId,
          itemId: props.model.id,
        });
      }

      function onDelete() {
        store.commit("DELETE_ITEM", {
          listId: props.listId,
          id: props.model.id,
        });
      }

      function onEdit(event: Event) {
        const target = event.target as HTMLElement;
        store.commit("EDIT_ITEM", {
          listId: props.listId,
          id: props.model.id,
          text: target.innerText,
        });
        target.blur();
      }

      return {
        onToggle,
        onDelete,
        onEdit,
      };
    },
  });
</script>
<style lang="scss" scoped>
  @import "../../node_modules/bootstrap/scss/bootstrap.scss";

  .app-list-item {
    @extend .list-group-item;
    @extend .py-2;
    @extend .px-0;
    @extend .d-flex;
    @extend .align-items-center;
    border: none;
  }

  .app-list-item-button {
    @extend .me-1;
    height: 32px;
    width: 32px;
  }

  .app-list-item-delete-button {
    @extend .app-list-item-button;
    // @extend .ms-auto;
  }

  .app-list-item-handle {
    // @extend .my-2;
    @extend .me-1;
    height: 32px;
    width: 32px;
  }

  .app-list-item-content {
    @extend .px-2;
  }

  .app-list-item-info {
    @extend .app-list-item-content;
    font-size: 12px;
    color: grey;
  }

  .app-list-item-content:focus {
    background-color: black;
    color: white;
  }
  .app-list-item-content-end {
    @extend .flex-grow-1;
    @extend .h-100;
  }
</style>
