<template>
  <div class="app-list-item">
    <img
      class="app-list-item-button handle"
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
    <div
      class="app-list-item-content"
      contenteditable="true"
      @keydown.enter="emitOnEdit($event)"
      @blur="emitOnEdit($event)"
    >
      {{ model.content }}
    </div>
    <div class="app-list-item-content-end"></div>
    <img
      class="app-list-item-button"
      alt="delete"
      src="../assets/x.svg"
      v-if="model.status"
      @click="emitOnDelete"
    />
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
          content: "default task",
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
    @extend .d-flex;
    @extend .align-items-center;
    border: none;
  }

  .app-list-item-button {
    @extend .me-2;
    height: 32px;
    width: 32px;
  }

  .app-list-item-content {
    @extend .d-flex;
    @extend .align-self-center;
    @extend .px-2;
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
