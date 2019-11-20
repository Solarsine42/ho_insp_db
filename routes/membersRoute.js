const express = require("express");
const router = express.Router();
const members = require("../controllers/members");

/* GET home page. */
router.get("/", members.getAllMembers);
router.get("/:id", members.getOneMember);

module.exports = router;
