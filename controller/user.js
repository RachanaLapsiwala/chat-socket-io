    const { models: { User } } = require("../models");
    const create = async (req, res) => {
        if (req.body.password && req.body.username) {
            const{ username,password} = req.body
            console.log(global.io.sockets.id);
            // let response = await User.create({
            //     username,
            //     password
            // })
        global.io.sockets.on("order-added",()=>{
          global.io.sockets.emit('order-added',{ username,password})
          console.log("🚀 ~ file: user.js:12 ~ global.io.sockets.on ~ global.io.sockets.emit('order-added',response.dataValues)", global.io.sockets.emit('order-added',response.dataValues))
        })
            res.status(200).send("successfully");
        } else {
            res.send('Not Added to the database')
        }
    }
    const findAll = async (req, res) => {
        try {
            const allusers = await User.findAll()
            await res.status(200).send(allusers);
        } catch (e) {
            console.log(e);
        }
    }
    const findbyid = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const userbyid = await User.findAll({
                where: {
                    id: id
                }
            });
            res.status(200).send(userbyid)
        } catch (e) {
            console.log(e);
        }
    }
    const updateuser = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const updatedData = await User.
                update(
                    { username: "tony" },
                    {
                        where: {
                            id: id
                        }
                    }
                );
            res.status(200).send("Data is updated");
        } catch (e) {
            console.log(e);
        }
    }
    module.exports = {
        create,
        findAll,
        findbyid,
        updateuser
    }