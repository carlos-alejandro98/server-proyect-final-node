const express = require("express");
const router = express.Router();

// middlewares
const { createGame, gamesCount, listAll, softRemoveGame, removeGame, readGame, updateGame } = require("../controllers/game");


// routes-enpoints games

router.post("/game/add", createGame);
router.get("/games/total", gamesCount);
router.get("/games/:count", listAll);
router.patch("/game/softDelete/:slug", softRemoveGame);  // cambio de estado
router.delete("/game/removeGame/:slug", removeGame); 

/**
 * @swagger
 * /game/detailsGame/{game}:
 *   get:
 *     tags:
 *       - name: "Game"
 *     summary: "Details Game"
 *     responses:
 *       200: 
 *          description: ok   
 */
router.get("/game/detailsGame/:slug", readGame);
router.put("/game/updateGame/:slug", updateGame);

module.exports = router;