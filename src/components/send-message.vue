<template>
  <div>
    <textarea v-model="message"></textarea>
    <button @click="send">Send</button>
  </div>
</template>
<script>
import { defineComponent, onMounted, computed, ref, reactive } from "vue";
import { useStore } from "vuex";
import { currentUser, conversation } from "../model/mockAPI";
export default defineComponent({
  props: {},
  setup(props) {
    const store = useStore();
    const message = ref("");

    const send = () => {
      const messagePayload = {
        id: store.getters.getCount + 1,
        from: JSON.parse(currentUser),
        message: message.value,
        date: Date.now(),
      };
      store.dispatch("addMessage", messagePayload);
      store.dispatch("increment");
    };

    return {
      message,
      send,
    };
  },
});
</script>
<style scoped></style>
