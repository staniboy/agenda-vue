import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { List, Item } from "../types";
import { currentDate, getNextAvailableId, getListById } from "./utils";

export default createStore({
  state: {
    lists: [
      {
        id: 0,
        name: "List ID 0",
        items: [
          {
            id: 0,
            text: "This is unchecked task...",
            status: false,
            dateAdded: "18/5/2019",
          },
          {
            id: 1,
            text: "This is task is done!",
            dateAdded: "7/1/2021",
            status: true,
          },
          {
            id: 2,
            text: "Another unchecked task.",
            status: false,
            dateAdded: "20/4/2020",
          },
        ] as Array<Item>,
      },
    ],
  },
  getters: {
    //Returns all Lists
    getLists: (state) => {
      return state.lists;
    },
    //Returns List object by id
    getListById: (state) => (id: number) => {
      return state.lists.find((list) => list.id === id);
    },
    //Returns array of items from list by list id
    getListItemsById: (state) => (id: number) => {
      return state.lists.find((list) => list.id === id)!.items;
    },
    //Returns last item in item array by listId
    getLastItemByListId: (state) => (id: number) => {
      const list = getListById(id, state.lists);
      return list.items[list.items.length - 1];
    },
  },
  mutations: {
    // Updates lists array with array of new lists
    UPDATE_LISTS(state, newLists) {
      state.lists = newLists;
    },

    // Updates items array of the list with new item array
    UPDATE_LIST_ITEMS(state, { id, newListItems }) {
      state.lists.find((list) => list.id === id)!.items = newListItems;
    },

    // Toggles status of the item by list and item ids
    TOGGLE_ITEM(state, { listId, itemId }) {
      const item = state.lists
        .find((list) => list.id === listId)!
        .items.find((item) => item.id === itemId);
      item!.status = !item?.status;
    },
    //Deletes list or list item from list based on arrgs passed.
    DELETE_ITEM(state, { listId = null, id }) {
      if (listId === null) {
        // Assuming we deleting list by its ID since listId wasn't passed
        state.lists = state.lists.filter((x) => x.id !== id);
      } else {
        const list = state.lists.find((list) => list.id === listId);
        list!.items = list!.items.filter((x) => x.id !== id);
      }
    },
    //Edits task text or list name depending on arrguments passed.
    EDIT_ITEM(state, { listId = null, id, text }) {
      if (listId === null) {
        const list = state.lists.find((list) => list.id === id);
        list!.name = text;
      } else {
        const item = state.lists
          .find((list) => list.id === listId)!
          .items.find((item) => item.id === id);
        item!.text = text;
      }
    },

    //Adds new item to the list by id
    ADD_ITEM(state, { listId, text }) {
      const list = getListById(listId, state.lists);
      const id = getNextAvailableId(list.items);
      const date = currentDate();
      // Creating new item
      const item = {
        id: id,
        text: text,
        dateAdded: date,
        status: false,
      } as Item;
      // Pushing item to the list
      list!.items.push(item);
    },

    DELETE_ALL_LIST_ITEMS(state, { listId }) {
      const list = getListById(listId, state.lists);
      list.items = [];
    },

    RESET_LIST_ITEMS(state, { listId }) {
      const list = getListById(listId, state.lists);
      list.items.forEach((x) => {
        x.status = false;
      });
    },
    DELETE_DONE_LIST_ITEMS(state, { listId }) {
      const list = getListById(listId, state.lists);
      list.items = list.items.filter((x) => {
        return x.status === false;
      });
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
