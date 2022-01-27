const express = require("express");

const router = express.Router();

// middlewares
const { createGame, gamesCount, listAll } = require("../controllers/game");


// routes-enpoints games
router.post("/game/add", createGame);
router.get("/games/total", gamesCount);
router.get("/games/:count", listAll);
/*
router.patch("/game/:slug", removeGame); */ // cambio de estado
/* router.delete("/game/:slug", removeGame2); 
router.get("/game/:slug", readGame);
router.put("/game/:slug", updateGame); */

module.exports = router;