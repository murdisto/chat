<template>
  <section class="chat-window">
    <div class="messages">
      <div class="message" v-for="message in messages" :key="message.index">
        <div class="username">{{message.username}}</div>
        <div class="message-text">{{message.msg}}</div>
      </div>
    </div>
    <form class="input-container" :submit="sendMessage">
      <input type="text" v-model="msg">
      <button @click="sendMessage" :disabled="!message">Send></button>
    </form>
  </section>
</template>


<script>
export default {
  name: 'chatroom',
  props: ['messages'],
  data(){
    return {
      msg: ""
    }
  },
  methods: {
    sendMessage(){
      !this.message ? alert("Is this really necessary?") : null;

      this.$emit('sendMessage', this.msg);
      this.msg = "";

    },

  }
}
</script>

<style lang="scss" scoped>
.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.15); 
}
</style>
