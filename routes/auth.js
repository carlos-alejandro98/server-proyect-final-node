const express= require("express");
const router = express.Router();

// middlewares pre-process
const { generateToken, authCheck } = require("../middlewares/auth");

// middlewares controllers
const { createOrUpdateUser, validateToken } = require("../controllers/auth");

// routes - endpoints
router.post("/generate-user", generateToken, validateToken);

/**
 * @swagger
 * schemes:
 *   - "https"
 *   - "http"
 * /create-or-update-user:
 *  post:
 *    summary: Create or Update User with Firebase Auth
 *    tags:
 *      - Auth
 *    consumes:
 *      - "application/json"
 *    produces:
 *      - "application/json"
 *    parameters:
 *      - name: authtoken
 *        in: header
 *        description: an authorization token JWT-ouath2
 *    responses:
 *     "200":
 *        description: User Information
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/User"
 *     "401":
 *        description: Invalid or expired token
*/    
router.post("/create-or-update-user", authCheck, createOrUpdateUser);


// TO-DO SCHEMAS - SWAGGER

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         name:
 *            type: string
 *         email:
 *            type: string
 *            index: true
 *         role:
 *            type: string
 *            default: "subscriber"
 *         cart:
 *            type: Array
 *            default: []
 *         address:
 *            type: String
 *         wishlist:
 *              $ref: "#/components/schemas/Product"
 *       example:
 *         name: mchamorro
 *         email: mchamorro@escalab.academy
 *         role: subscriber
 *         cart: []
 *         address: Sotomayor 5252, Sta. Elvira
 *         wishlist: []      
 */

module.exports = router;