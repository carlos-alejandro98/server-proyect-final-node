const express = require("express");

const router = express.Router();

// routes
router.get("/game", (req, res) => {
    res.json({
        data: "Aquí se mostrarán los juegos",
    });
});

module.exports = router;