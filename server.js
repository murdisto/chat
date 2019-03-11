const app = require("express")(); //same as doing it with two diff declarations like in prev projects
const http = require("http").Server(app);
const io = require("socket.io")(http);

let users = [];
let messages = [];
let index = 0;

io.on("connection", socket => {
  socket.emit('loggedIn', {
    users: users.map(s => s.username),
    messages,
  });

  socket.on("newuser", username => {
    console.log(`${username} has joined the channel.`);
    socket.username = username;
    users.push(socket);

    io.emit('userOnline', socket.username);
  });

  socket.on('msg', msg => {
    let message = {
      index,
      msg,
      username: socket.username,
    };

    messages.push(message);

    io.emit('msg', message);

    index++;

  });

  //disconnect
  socket.on("disconnect", () => {
    console.log(`${socket.username} has left the channel.`);

    io.emit('userLeft', socket.username);
    users.splice(users.indexOf(socket), 1);
    
  });
});

http.listen(3000, () => {
  console.log("listening on port %s", 3000);
  
});