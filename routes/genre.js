const express = require("express");
const router = express.Router();

// controller-middlewares
const { createGenre, getGenre, updateStatusGenre } = require("../controllers/genre");

// middlewares validators
const { validateCreateGenre, validateUpdateGenre } = require("../validations/genre");

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
router.post("/genre/add", validateCreateGenre, createGenre);

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


/**
 * @swagger
 * /platform/updateStatus/{genre}:
 *   patch:
 *     tags:
 *       - name: "Genre"
 *     summary: "Update Status Genre"
 *     parameters:
 *       - name: "Genre"
 *         in: "path"
 *         description: "genre search"
 *         required: true
 *         type: "string"
 *         trim: true
 *         text: true
 *     responses:
 *       200: 
 *          description: ok   
 */
 router.patch("/genre/updateStatus/:slug",validateUpdateGenre, updateStatusGenre);

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