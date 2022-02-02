const express = require("express");
const router = express.Router();

// middlewares
const { getGamesAll, createGame, gamesCount, getGamesByNumber, softRemoveGame, removeGame, readGame, updateGame } = require("../controllers/game");


// routes-enpoints games

/**
 * @swagger
 * /games:
 *   get:
 *     tags:
 *       - name: "Game"
 *     summary: "Get Games"
 *     responses:
 *       200: 
 *          description: ok   
 */
router.get("/games", getGamesAll);

/**
 * @swagger
 * /game/add:
 *   post:
 *     summary: Create Game
 *     tags:
 *       - name: "Game"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Game"
 *     responses:
 *       200: 
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Game"
 *       400:
 *         description: bad request     
 */
router.post("/game/add", createGame);

/**
 * @swagger
 * /games/total:
 *   get:
 *     tags:
 *       - name: "Game"
 *     summary: "Get Games Count"
 *     responses:
 *       200: 
 *          description: ok   
 */
router.get("/games/total", gamesCount);

/**
 * @swagger
 * /game/{game}:
 *   get:
 *     tags:
 *       - name: "Game"
 *     summary: "Get Details Game"
 *     parameters:
 *       - name: "game"
 *         in: "path"
 *         description: "game search"
 *         required: true
 *         type: "string"
 *         trim: true
 *         text: true
 *     responses:
 *       200: 
 *          description: ok   
 */
router.get("/games/:count", getGamesByNumber);

/**
 * @swagger
 * /game/softDelete/{game}:
 *   patch:
 *     tags:
 *       - name: "Game"
 *     summary: "Update Status Game"
 *     parameters:
 *       - name: "game"
 *         in: "path"
 *         description: "game search"
 *         required: true
 *         type: "string"
 *         trim: true
 *         text: true
 *     responses:
 *       200: 
 *          description: ok   
 */
router.patch("/game/softDelete/:slug", softRemoveGame);  // cambio de estado

/**
 * @swagger
 * /game/removeGame/{game}:
 *   delete:
 *     tags:
 *       - name: "Game"
 *     summary: "Delete Game"
 *     parameters:
 *       - name: "game"
 *         in: "path"
 *         description: "game search"
 *         required: true
 *         type: "string"
 *         trim: true
 *         text: true
 *     responses:
 *       200: 
 *          description: ok   
 */
router.delete("/game/removeGame/:slug", removeGame); 

/**
 * @swagger
 * /game/detailsGame/{game}:
 *   get:
 *     tags:
 *       - name: "Game"
 *     summary: "Details Game"
 *     parameters:
 *       - name: "game"
 *         in: "path"
 *         description: "game search"
 *         required: true
 *         type: "string"
 *         trim: true
 *         text: true
 *     responses:
 *       200: 
 *          description: ok   
 */
router.get("/game/detailsGame/:slug", readGame);

/**
 * @swagger
 * /game/updateGame/{game}:
 *   post:
 *     summary: Update Game
 *     tags:
 *       - name: "Game"
 *     parameters:
 *       - name: "game"
 *         in: "path"
 *         description: "game search"
 *         required: true
 *         type: "string"
 *         trim: true
 *         text: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Game"
 *     responses:
 *       200: 
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Game"
 *       400:
 *         description: bad request     
 */
router.put("/game/updateGame/:slug", updateGame);

module.exports = router;


// SCHEMAS - SWAGGER

/**
 * @swagger
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - mainImage
 *       properties:
 *         title:
 *            type: string
 *            trim: true
 *            minlength: 2
 *            maxlength: 32
 *         slug:
 *            type: string
 *            unique: true
 *            lowercase: true
 *            index: true
 *         description:
 *            type: string
 *            trim: true
 *            maxlength: 2000
 *            text: true
 *         genre:
 *            type: string
 *         url:
 *            type: string
 *         status:
 *            type: string
 *            default: "Active"
 *            enum:
 *            - "Active"
 *            - "Inactive"
 *         mainImage:
 *            type: string
 *            trim: true
 *            text: true
 *       example:
 *         title: Valorant
 *         description: The best game in the world
 *         genre: 61f878b3e65d1d4670ea47a1
 *         url: https://playvalorant.com/
 *         platform: 61f698533f51274950308a6b
 *         mainImage: ruta imagen
 *         gameImages: [] 
 *         slug: valorant
 *         status: Active      
 */