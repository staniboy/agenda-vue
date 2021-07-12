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
            @click="emitOnClearList"
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
      <!-- List Index -->
      <!-- <ul class="navbar-nav mr-auto" v-for="l in lists" v-bind:key="l.id">
        <li class="nav-item">
          <a class="nav-link" @click="emitOnSetList(l)">{{ l.name }}</a>
        </li>
      </ul>
      <br /> -->
      <!-- Task utils -->

      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="emitOnDeleteChecked">
            <img src="../assets/delete-checked.svg" alt="" /> Delete Checked</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="emitOnResetChecked"
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
      <span class="version">0.1.3</span>
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
                @click.prevent="emitOnAddItem"
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

  export default defineComponent({
    emits: [
      "onAddItem",
      "onDeleteChecked",
      "onResetChecked",
      "onClearList",
      "onSetList",
    ],
    props: ["lists"],

    setup(props, { emit }) {
      const input = ref();

      // TODO: Add proper type
      function emitOnSetList(list: Event) {
        emit("onSetList", list);
      }
      function resetInput() {
        input.value.value = "";
        input.value.focus();
      }

      function emitOnAddItem() {
        emit("onAddItem", input.value.value);
        resetInput();
      }
      function emitOnDeleteChecked() {
        emit("onDeleteChecked");
      }
      function emitOnResetChecked() {
        emit("onResetChecked");
      }
      function emitOnClearList() {
        emit("onClearList");
      }
      return {
        input,
        emitOnSetList,
        resetInput,
        emitOnAddItem,
        emitOnDeleteChecked,
        emitOnResetChecked,
        emitOnClearList,
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
