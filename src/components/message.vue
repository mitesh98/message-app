<template>
  <div
    :class="['message-container', isMessageFromCurrentUser ? 'right' : 'left']"
  >
    <div style="align-self: flex-end">
      <img :src="conversation?.from?.thumbnail" />
    </div>
    <div
      :class="[
        'message-bubble',
        isMessageFromCurrentUser
          ? 'message-bubble-right'
          : 'message-bubble-left',
      ]"
    >
      <div class="message-text">
        {{ conversation?.message }}
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, computed } from "vue";
import { currentUser } from "../model/mockAPI";
export default defineComponent({
  props: {
    conversation: {
      type: Object,
      default: () => null,
    },
  },
  setup(props) {
    const isMessageFromCurrentUser = computed(() => {
      const userLoggedIn = JSON.parse(currentUser);
      return userLoggedIn?.id === props?.conversation?.from?.id;
    });
    return {
      isMessageFromCurrentUser,
    };
  },
});
</script>
<style scoped>
.message-container {
  display: flex;
}
.message-bubble {
  max-width: 60%;
  margin-left: 12px;
  display: flex;

  background: gray;
  border-radius: 12px;
  padding: 8px;
}
.message-bubble-left {
  background: gray;
}
.message-bubble-right {
  background: skyblue;
}
.message-text {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}
.right {
  justify-content: flex-end;
}
.left {
  justify-content: flex-start;
}
</style>
