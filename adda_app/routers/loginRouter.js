const express = require("express");

const { getLogin } = require("../controllers/loginController");
const { decorateHTMLResponse } = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

router.get("/", decorateHTMLResponse("Login"), getLogin);

module.exports = router;