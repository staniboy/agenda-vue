<template>
  <div class="list-item-container">
    <div class="handle-container">
      <img class="icon handle" alt="grip" src="../assets/grip-vertical.svg" />
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
    <div class="content-container">
      <div
        class="top"
        contenteditable="true"
        @keydown.enter="onEdit"
        @blur="onEdit"
      >
        {{ model.text }}
      </div>
      <div class="bottom">Added on: {{ model.dateAdded }}</div>
    </div>
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
      },
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

  .list-item-container {
    display: flex;
    align-items: center;
    margin: 1em 0;
    .handle-container {
      width: 32px;
    }
    .rb-container {
      width: 32px;
    }
    .content-container {
      flex-grow: 1;
      margin-left: .8em;
      .bottom {
        color: grey;
        font-size: 0.8em;
      }
    }
    .end-container {
      width: 32px;
    }
    .icon {
        width: 100%;
      }
  }
</style>
