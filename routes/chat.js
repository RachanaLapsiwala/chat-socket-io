const express = require("express");
const {chat} = require("../controller");
const router = express.Router();

router.post("/create",chat.create);
router.post("/getAll",chat.getall)
router.get("/getbyid/:id",chat.findById)
router.patch("/update/:id",chat.update)
module.exports = router