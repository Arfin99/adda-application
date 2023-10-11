// external imports
const express = require("express");

//internal imports
const { getUsers } = require("../controllers/usersController");
const { decorateHTMLResponse } = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

// users page

router.get("/", decorateHTMLResponse("Users"), getUsers);

module.exports = router;