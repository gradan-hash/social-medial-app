const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});
//let since it will change
let users = [];
//add
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
//remove
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connect
  console.log(" a user connected");
  //take userID
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get  message

  socket.on("sendMessage", (senderId, receiverId, text) => {
    const user = getUser(receiverId);
    if (user) {
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
    } else {
      console.log(`User ${receiverId} not found`);
    }
  });

  //when disconnected

  socket.on("disconnect", (socketId) => {
    console.log("user disconnected");
    removeUser(socketId);
    io.emit("getUsers", users);
  });
});
