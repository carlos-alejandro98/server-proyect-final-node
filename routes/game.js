const express = require("express");
const router = express.Router();

// middlewares
const { createGame, gamesCount, listAll, softRemoveGame, removeGame, readGame, updateGame } = require("../controllers/game");


// routes-enpoints games

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
router.get("/games/:count", listAll);

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
 *   put:
 *     tags:
 *       - name: "Game"
 *     summary: "Update Game"
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
 *         name: PC
 *         slug: pc
 *         status: Active      
 */