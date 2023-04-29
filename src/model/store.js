import { createStore } from "vuex";
import { currentUser, conversation } from "../model/mockAPI";
const store = createStore({
  state: {
    count:  JSON.parse(conversation).length,
    conversation: JSON.parse(conversation),
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addMessage(state, payload) {
      state.conversation.push(payload);
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    addMessage(context, payload) {
      context.commit("addMessage", payload);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getConversation(state) {
      return state.conversation;
    },
  },
});

export default store;
