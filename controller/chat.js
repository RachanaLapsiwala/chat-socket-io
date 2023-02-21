const { models: { Chat } } = require("../models");
const socket = require('../index');
const create = async (req, res) => {
    if (req.body.message) {
        const { message, author, room, time } = req.body;
        await Chat.create({
            message: message,
            author: author,
            room: room
        });

        global.io.sockets.emit("send_message", (data) => {
            data = { message, author, room, time };
            global.io.sockets.emit("recieve_message", data);
            global.io.sockets.in(room).emit("recieve_message", data);
        })
        res.status(200).send("Data added successfully")
    } else {
        res.send("Data not added to the Database")
    }
}

const getall = async (req, res) => {
    try {
        const user = req.body.username
        const allChatmessage = await Chat.findAll({
            // where: { author: user },
            limit: 100
        })
        
        res.status(200).send(allChatmessage)

    } catch (e) {
        console.log(e);
    }
}
const findById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const record = await Chat.findAll({
            where: {
                id: id
            }
        });
        res.status(200).send(record)
    } catch (e) {
        console.log(e);
    }
}

const update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const message = req.body.message;
        console.log("🚀 ~ file: chat.js:55 ~ update ~ message", message)
        await Chat.update({ message: message }, {
            where: {
                id: id
            }
        });
        res.send("Data updated successfully")
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    create,
    getall,
    findById,
    update
}