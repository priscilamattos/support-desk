const { request } = require("express");
const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  request.send("Register Route");
});
router.post("/login", (req, res, next) => {
  request.send("Login Route");
});

module.exports = router;
