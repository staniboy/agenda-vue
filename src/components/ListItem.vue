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
      @click="emitOnToggle"
    />
    <img
      class="app-list-item-button"
      alt="checkbox-checked"
      src="../assets/check-circle.svg"
      v-else
      @click="emitOnToggle"
    />
    <div class="d-flex flex-column justify-content-start flex-grow-1">
      <div class="d-inline-flex">
        <div
          class="app-list-item-content"
          contenteditable="true"
          @keydown.enter="emitOnEdit($event)"
          @blur="emitOnEdit($event)"
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
      @click="emitOnDelete"
    />
    <div v-else class="app-list-item-delete-button"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    emits: ["onToggle", "onDelete", "onEdit"],
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
    },
    setup(props, { emit }) {
      function emitOnToggle() {
        emit("onToggle");
      }

      function emitOnDelete() {
        emit("onDelete");
      }

      function emitOnEdit(event: Event) {
        const target = event.target as HTMLElement;
        emit("onEdit", target.innerText);
        target.blur();
      }

      return {
        emitOnToggle,
        emitOnDelete,
        emitOnEdit,
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
