const express = require("express");
const router = express()
const userroute = require("./login");
const chatroute = require("./chat")
router.use("/userapi", userroute)
router.use("/chat", chatroute)

module.exports = router;