<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="clearListModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Clear this list?</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          All tasks in this list will be gone! Are you sure?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-danger text-white"
            data-bs-dismiss="modal"
            @click="onClearList"
          >
            Delete!
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal End -->
  <header class="sticky-top">
    <!-- Collapsable content -->
    <div
      class="nav-menu-col collapse navbar-collapse bg-white"
      id="collapseTarget"
    >
      <!-- List utils -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="onDeleteChecked">
            <img src="../assets/delete-checked.svg" alt="" /> Delete Checked</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="onResetChecked"
            ><img src="../assets/reset-checked.svg" alt="" /> Reset Checked</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="modal"
            data-bs-target="#clearListModal"
            href="#"
            ><img src="../assets/clear-list.svg" alt="" /> Clear List</a
          >
        </li>
      </ul>
      <span class="version">0.1.4</span>
    </div>
    <!-- Collapsable content -->
    <nav class="navbar px-0 navbar-light bg-white">
      <div class="d-inline-flex w-100">
        <button
          class="navbar-toggler me-2 py-0 bg-light"
          type="button"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <form class="w-100">
          <div class="input-group">
            <input
              ref="input"
              type="text"
              class="form-control flex-shrink-1"
              placeholder="Enter task here"
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
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useStore } from "vuex";

  export default defineComponent({
    props: [],
    setup() {
      const store = useStore();
      const input = ref();

      function resetInput() {
        input.value.value = "";
        input.value.focus();
      }

      // Adds new item via ADD_ITEM commit based on input value
      function onAddItem() {
        store.commit("ADD_ITEM", {
          listId: 0,
          text: input.value.value,
        });
        resetInput();
      }

      // List Utilities

      function onDeleteChecked() {
        store.commit("DELETE_DONE_LIST_ITEMS", { listId: 0 });
      }
      function onResetChecked() {
        store.commit("RESET_LIST_ITEMS", { listId: 0 });
      }
      function onClearList() {
        store.commit("DELETE_ALL_LIST_ITEMS", { listId: 0 });
      }
      return {
        input,
        resetInput,
        onAddItem,
        onDeleteChecked,
        onResetChecked,
        onClearList,
      };
    },
  });
</script>
<style lang="scss">
  @import "../../node_modules/bootstrap/scss/bootstrap.scss";

  .nav-menu-col {
    a {
      @extend .py-3;
      color: black;
    }
  }
  .version {
    // @extend .text-center;
    @extend .text-black-50;
    @extend .p-0;
    font-size: 0.75em;
  }
</style>
