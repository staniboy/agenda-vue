<template>
  <div class="add-item-container">
    <div class="start-container"></div>
    <div class="icon-container">
      <img class="icon" alt="add sign" src="../assets/plus-lg.svg" />
    </div>
    <div
      @focus="onFocus"
      @blur="onBlur"
      @keydown.enter.prevent="onAddItem"
      ref="input"
      class="content-container"
      contenteditable="true"
    >
      Add Item
    </div>
    <div class="end-container"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, nextTick, ref } from "vue";
  import { useStore } from "vuex";

  export default defineComponent({
    props: {
      listId: {
        type: Number,
        required: true,
      },
    },
    setup() {
      const store = useStore();
      const input = ref();

      function onBlur() {
        input.value.innerText = "Add Item"
      }

      function onFocus() {
        input.value.innerText = ""
      }
      function onAddItem() {
        store.commit("ADD_ITEM", {
          listId: 0,
          text: input.value.innerText,
        });
        input.value.innerText = "";
        input.value.focus();
        
      }

      return {
        input,
        onBlur,
        onFocus,
        onAddItem,
      };
    },
  });
</script>
<style lang="scss" scoped>
  @import "../../node_modules/bootstrap/scss/bootstrap.scss";

  .add-item-container {
    display: flex;
    align-items: center;
    margin: 1em 0;
    .start-container {
      width: 32px;
    }
    .icon-container {
      width: 32px;
    }
    .content-container {
      flex-grow: 1;
      margin-left: 0.8em;
    }
    .end-container {
      width: 32px;
    }
    .icon {
      display: flex;
      width: 50%;
      margin: auto;
    }
  }
</style>
