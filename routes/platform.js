const express = require("express");
const router = express.Router();

// controller-middlewares
const { createPlatform, getPlatforms } = require("../controllers/platform");


router.post("/platform/add", createPlatform);
router.get("/platform/getPlatforms", getPlatforms);

module.exports = router;    