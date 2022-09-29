import * as dotenv from 'dotenv';
dotenv.config({path: './.env'});
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
    });
});
