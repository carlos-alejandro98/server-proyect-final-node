const express = require("express");
const router = express.Router();

// controller-middlewares
const { createPlatform, getPlatforms, updateStatusPlatform } = require("../controllers/platform");

// middlewares validators
const { validateCreatePlatform, validateUpdatePlatform } = require("../validations/platform");

/**
 * @swagger
 * /platform/add:
 *   post:
 *     summary: Create Platform
 *     tags:
 *       - name: "Platform"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Platform"
 *     responses:
 *       200: 
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Platform"
 *       400:
 *         description: bad request     
 */
router.post("/platform/add", validateCreatePlatform, createPlatform);

/**
 * @swagger
 * /platform/getPlatforms:
 *   get:
 *     tags:
 *       - name: "Platform"
 *     summary: "Get Platforms"
 *     responses:
 *       200: 
 *          description: ok   
 */
router.get("/platform/getPlatforms", getPlatforms);



/**
 * @swagger
 * /platform/updateStatus/{platform}:
 *   patch:
 *     tags:
 *       - name: "Platform"
 *     summary: "Update Status Platform"
 *     parameters:
 *       - name: "platform"
 *         in: "path"
 *         description: "platform search"
 *         required: true
 *         type: "string"
 *         trim: true
 *         text: true
 *     responses:
 *       200: 
 *          description: ok   
 */
router.patch("/platform/updateStatus/:slug",validateUpdatePlatform, updateStatusPlatform);


module.exports = router;   

// SCHEMAS - SWAGGER

/**
 * @swagger
 * components:
 *   schemas:
 *     Platform:
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
 *         name: PC
 *         slug: pc
 *         status: Active      
 */