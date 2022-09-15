const { request } = require("express");
const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControlle");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
