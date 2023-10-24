// external imports
const express = require("express");

//internal imports
const { getUsers, addUser, removeUser } = require("../controllers/usersController");
const { decorateHTMLResponse } = require("../middlewares/common/decorateHTMLResponse");
const profileImageUpload = require("../middlewares/users/profileImageUpload");
const {} = require("../middlewares/users/userValidators");

const router = express.Router();

// users page

router.get("/", decorateHTMLResponse("Users"), getUsers);

//add user
router.post("/",profileImageUpload, a  );

module.exports = router;