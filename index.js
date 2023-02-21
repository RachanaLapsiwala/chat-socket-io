const express = require("express");
const app = express();
const http = require("http");

const db = require("./models");
const { Server } = require("socket.io");
const apiRoute = require("./routes/index");

const cors = require("cors");
app.use(cors())
app.use(express.json())
app.use("/api", apiRoute)
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
global.io = io;
server.listen(4000, () => {
    console.log(`the port is running ${4000}`);
})
io.on("connection", (socket) => { 
    // socket.once("connection",()=>{
    //     console.log();
    // }) 
   
})
