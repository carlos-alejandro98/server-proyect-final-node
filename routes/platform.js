const express = require("express");
const router = express.Router();

// controller-middlewares
const { createPlatform, getPlatforms } = require("../controllers/platform");


router.post("/platform/add", createPlatform);

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