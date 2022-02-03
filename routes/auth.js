const express= require("express");
const router = express.Router();

// middlewares pre-process
const { generateToken } = require("../middlewares/auth");

// middlewares controllers
const { validateToken } = require("../controllers/auth");

// routes - endpoints
router.post("/generate-user", generateToken, validateToken);

module.exports = router;