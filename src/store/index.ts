import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { List, Item } from "../types";

export default createStore({
  state: {
    lists: [
      {
        id: 0,
        name: "List ID 0",
        items: [
          {
            id: 0,
            text: "default item 1",
            status: false,
          },
          {
            id: 1,
            text: "default item 2",
            status: false,
          },
          {
            id: 2,
            text: " default item 3",
            status: true,
          },
        ],
      },
      {
        id: 1,
        name: "List ID 1",
        items: [
          {
            id: 0,
            text: "default item 2 1",
            status: true,
          },
          {
            id: 1,
            text: "default item 2 2",
            status: false,
          },
        ],
      },
      {
        id: 3,
        name: "List ID 3",
        items: [
          {
            id: 0,
            text: "default item 1",
            status: true,
          },
          {
            id: 1,
            text: "default item 2",
            status: true,
          },
          {
            id: 2,
            text: "default item 3",
            status: true,
          },
        ],
      },
    ] as Array<List>,
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
