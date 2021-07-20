<template>
  <div class="list-item-container">
    <div class="handle-container">
      <img
        class="icon handle"
        alt="grip"
        src="../assets/three-dots-vertical.svg"
      />
    </div>
    <div class="rb-container">
      <img
        class="icon"
        alt="checkbox-unchecked"
        src="../assets/circle.svg"
        v-if="!model.status"
        @click="onToggle"
      />
      <img
        class="icon"
        alt="checkbox-checked"
        src="../assets/check-circle.svg"
        v-else
        @click="onToggle"
      />
    </div>
    <div
      class="content-container"
      ref="input"
      contenteditable="true"
      @keydown.enter.prevent="onEdit"
      @blur="onEdit"
    >
      {{ model.text }}
    </div>
    <div class="pusher" @click="focusInput"></div>
    <div class="end-container">
      <img
        class="icon"
        alt="delete"
        src="../assets/x.svg"
        v-if="model.status"
        @click="onDelete"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { setCaret } from "@/utils";
  import { defineComponent, ref } from "vue";
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
      },
    },
    setup(props) {
      const store = useStore();
      const input = ref();
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

      function onEdit() {
        if (input.value.innerText === "") {
          input.value.blur();
          onDelete();
        } else {
          store.commit("EDIT_ITEM", {
            listId: props.listId,
            id: props.model.id,
            text: input.value.innerText,
          });
          input.value.blur();
        }
      }

      function focusInput() {
        input.value.focus();
        setCaret(input.value);
      }

      return {
        input,
        onToggle,
        onDelete,
        onEdit,
        focusInput,
      };
    },
  });
</script>
<style lang="scss" scoped>
  @import "../../node_modules/bootstrap/scss/bootstrap.scss";

  .list-item-container {
    display: flex;
    align-items: center;
    margin: 1em 0;
    height: 100%;
    .handle-container {
      width: 32px;
    }
    .rb-container {
      width: 32px;
    }
    .content-container {
      display: flex;
      padding-inline: 0.5em;
      margin-left: 0.8em;
    }
    .content-container:focus {
      background-color: black;
      color: white;
    }

    .pusher {
      height: 1em;
      flex-grow: 1;
    }
    .end-container {
      width: 32px;
    }
    .icon {
      width: 100%;
    }
  }
</style>
