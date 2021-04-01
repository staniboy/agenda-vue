<template>
  <header class="sticky-top">
    <nav class="navbar container">
      <form class="w-100">
        <div class="input-group">
          <input
            ref="input"
            type="text"
            class="form-control"
            placeholder="Enter New Task..."
            aria-label="New task field"
            autocomplete="off"
          />
          <div class="input-group-append">
            <button
              class="btn btn-primary"
              type="submit"
              @click.prevent="onAddItem"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </nav>
  </header>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    emits: {
      onAddItem({ content }): boolean {
        if (content === "") {
          alert("Please specify task!");
          return false;
        }
        return true;
      },
    },

    setup(props, { emit }) {
      const input = ref();

      function resetInput() {
        input.value.value = "";
        input.value.focus();
      }

      function onAddItem() {
        emit("onAddItem", input.value.value);
        resetInput();
      }
      return { input, resetInput, onAddItem };
    },
  });
</script>
<style lang="scss">
  @import "../../node_modules/bootstrap/scss/bootstrap.scss";
</style>
