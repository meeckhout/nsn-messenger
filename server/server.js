import * as dotenv from 'dotenv';
dotenv.config({path: '/env'});
import express from 'express';
import {Server} from 'socket.io';
import cors from 'cors';
import http from 'http';
import router from './routes/router.js';

// CORS settings
const corsOptions = {
    // Specify frontend origin
    origin: "*",
    // origin: "http://localhost:3000",
    // Specify accepted methods
    methods: ["GET", "POST"],
    credentials: true,
}

// Create & start app using Express & CORS
const app = express();
app.use(express.json());
// Set cross-origin resource sharing
app.use(cors(corsOptions));
// Add routes
app.use(router);

// Create backend server
const server = http.createServer(app);
// Set backend server-listener on port stored in .env
server.listen(process.env.SERVER_PORT, () => console.log(`Server running on port ${process.env.SERVER_PORT}`));

// Create socket connection to frontend server
const io = new Server(server, {cors: corsOptions});

io.on('connection', (socket) => {

    let addedUser = false;

    //New user connects via socket
    socket.on('add_user', (username) => {
        socket.username = username;
        addedUser = true;
        console.log("New user: " + username);
        console.log("New user socket id: " + socket.id);
        socket.broadcast.emit('user joined', socket.username);
    });

    //New message
    socket.on('new_message', (data) => {
        console.log(data);
//     socket.broadcast.emit('receive_message', {
//       sender: data.sender,
//       receiver: data.receiver,
//       message: data.message
//     });
    });

//   //User disconnects
//   socket.on('disconnect', () => {
//     if(addedUser){
//       socket.broadcast.emit('User left', socket.username);
//     }
//   });

});

// OTHER STUFF

// // Create array of online users
// // global.onlineUsers = new Map();

// let users = [];

// const addUser = (user, socketId) => {
//   // !users.some((user) => user.user === user) &&
//     users.push({ user, socketId });
// };

// // const removeUser = (socketId) => {
// //   users = users.filter((user) => user.socketId !== socketId);
// // };

// const getUser = (user) => {
//   return users.find((user) => user.user === user);
// };

// global.onlineUsers = new Map();

// io.on("connection", (socket) => {
//   global.chatSocket = socket;

//   //When user connects
//   console.log("a user connected.");

//   //Get user email & socketId from user
//   socket.on("add_user", (user) => {
//     console.log("Email is: " + user.userEmail);
//     addUser(user.userEmail, socket.id);
//     console.log("users: " + users);
//     // global.onlineUsers.set(user, socket.id);
//     // console.log("users:"+onlineUsers);
//     // io.emit("getUsers", users);
//   });

//   //Send & receive message
//   socket.on("send_message", ({ sender, receiver, message }) => {
//     console.log(sender, receiver, message);
//     const user = receiver;
//     io.broadcast.emit("receive_message", {
//       sender,
//       message,
//     });
//     console.log("messsage emitted as receive")
//   });

// //Action when user disconnects
// socket.on("disconnect", () => {
//   console.log("A user disconnected");
//   removeUser(socket.id);
//   // io.emit("getUsers", users);
// });
// });



// // Listen to socket events from frontend
// io.on("connection", (socket) => {
//   // Add online users to online-user-array
//   global.chatSocket = socket;
//   socket.on("add_user", (userId) => {
//     onlineUsers.set(userId, socket.id)
//     console.log("user"+ onlineUsers);
// });

// // If user is online, message is emitted
// socket.on("sent_message", ({sender, receiver, message}) => {
//     const sendUserSocket = onlineUsers.get(receiver);
//     console.log(sendUserSocket);
//     if(sendUserSocket) {
//       socket.to(sendUserSocket).emit("received_message", message);
//     }
// });

//   // // Fetch submitted message from front-end & send back as received message
//   // socket.on("sent_message", (data) => {
//   //     console.log(data);
//   //     // Only send message to other connected sockets, except for own socket
//   //     socket.broadcast.emit("received_message", data);
//   //     // Send message to specific chat room
//   //     // socket.to(data.chat).emit("receive_message", data);
//   // });
// });