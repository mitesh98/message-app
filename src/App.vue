<template>
  <div class="container">
    <display-conversation />
    <send-message style="width:100%"/>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import { currentUser, conversation } from "./model/mockAPI.js";
import DisplayConversation from "./components/display-conversation.vue";
import SendMessage from "./components/send-message.vue";
export default defineComponent({
  components: { DisplayConversation, SendMessage },
  setup() {},
});
</script>
<style scoped>
.container {
  border: 1px solid black;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  height: 100%;
}
</style>
