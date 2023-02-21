const socket = require('socket.io')

const addSockets = (server) => {
    const io = socket(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
    });

    global.io = io;
    
    io.on("connection", (socket) => {

        socket.on("message", (message) => {
            console.log(`User with ${socket.id} joined room : ${message}`);
        })
        
        socket.on("disconnect", () => {
            console.log(`User Disconnected ${socket.id}`);
        })
    });
    // socket.off("setup", () => {
    // 	console.log("USER DISCONNECTED");
    // 	socket.leave(userData._id);
    // });


}
module.exports.addSockets = addSockets
