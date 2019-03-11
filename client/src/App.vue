
<template>
  <div id="app">
    <header>
      <h1>Chat Room</h1>
      <p class="username">Username: {{username}}</p>
      <p class="online">Online: {{users.length}}</p>
    </header>
    <main>
      <ChatRoom v-bind:messages="messages" @sendMessage="this.sendMessage" />
    </main>
  </div>
</template>

<script>
import io from 'socket.io-client';
import ChatRoom from './components/ChatRoom';

export default {
  name: 'app',
  components: {
    ChatRoom,
  },
  data() {
    return {
      username: "",
      socket: io("http://localhost:3000"),
      messages: [],
      users: [],
    }
  },
  methods: {

    joinServer(){
      this.socket.on('loggedIn', data => {
        this.messages = data.messages;
        this.users = data.users;
        this.socket.emit('newuser', this.username);
      });
      this.listen();
    },

    listen() {
      this.socket.on('userOnline', user => {
        this.users.push(user);
      });

      this.socket.on('userLeft', user => {
        this.users.splice(this.users.indexOf(user), 1);
      });

      this.socket.on('msg', message => {
        this.messages.push(message);
      })

    },

    sendMessage(message) {
      this.socket.emit('msg', message);
    }

  },

  mounted(){
    this.username = prompt("What is your name?", "Anonymous");

    !this.username ? this.username = "Anonymous" : null;

    this.joinServer();
  },
}
</script>

<style lang="scss">
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;

  }

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width:768px;
  margin: 0 auto;
  border: solid #84CF6A 1px;
  padding: 15px;
  box-sizing: border-box;
}


</style>
