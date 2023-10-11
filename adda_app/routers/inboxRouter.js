const express = require("express");

const { getInbox } = require("../controllers/inboxController");
const { decorateHTMLResponse } = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

router.get("/", decorateHTMLResponse("Inbox"), getInbox);

module.exports = router;

