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
            v-model="content"
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
      const content = ref("");
      const input = ref();

      function resetInput() {
        content.value = "";
        input.value.focus();
      }
      
      function onAddItem() {
        emit("onAddItem", content.value);
        resetInput();
      }

      return {
        content,
        onAddItem,
        input,
      };
    },
  });
</script>
