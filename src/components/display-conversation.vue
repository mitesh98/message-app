<template>
  <div style="height: 100%; overflow-y: scroll">
    <div
      v-for="conversation in conversations"
      :key="conversation.id"
      style="margin-bottom: 4px"
    >
      <message :conversation="conversation" />
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { currentUser, conversation } from "../model/mockAPI";
import message from "./message.vue";
import Message from "./message.vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { message },
  component: {
    Message,
  },
  setup() {
    const store = useStore();
    const conversations = ref(store.getters.getConversation);
    return {
      conversations,
    };
  },
});
</script>
<style scoped></style>
