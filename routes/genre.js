const express = require("express");
const router = express.Router();

// controller-middlewares
const { createGenre, getGenre } = require("../controllers/genre");

/**
 * @swagger
 * /genre/add:
 *   post:
 *     summary: Create Genre
 *     tags:
 *       - name: "Genre"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Genre"
 *     responses:
 *       200: 
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Genre"
 *       400:
 *         description: bad request     
 */
router.post("/genre/add", createGenre);

/**
 * @swagger
 * /genre/getGenre:
 *   get:
 *     tags:
 *       - name: "Genre"
 *     summary: "Get Genre"
 *     responses:
 *       200: 
 *          description: ok   
 */
router.get("/genre/getGenre", getGenre);

module.exports = router;   

// SCHEMAS - SWAGGER

/**
 * @swagger
 * components:
 *   schemas:
 *     Genre:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *            type: string
 *            trim: true
 *            minlength: 2
 *            maxlength: 32
 *         slug:
 *            type: string
 *            unique: true
 *            lowercase: true
 *            index: true
 *         status:
 *            type: string
 *            default: "Active"
 *            enum:
 *            - "Active"
 *            - "Inactive"
 *       example:
 *         name: Shooter
 *         slug: shooter
 *         status: Active      
 */