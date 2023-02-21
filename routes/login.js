const express = require("express");
const router = express.Router();
const {user} = require("../controller");

router.post("/create",user.create);
router.get('/getall',user.findAll)
router.get('/getallbyid/:id',user.findbyid)
router.patch('/updatedData/:id',user.updateuser)
module.exports = router;