const admin = require("../firebase");

/* const User = require("../models/user"); */

// middlewares validation
exports.authCheck = async (req, res, next) => {
    console.log("Token obtenido: ",req.token); // token
    try {
        const firebaseUser = await admin
            .auth()
            .verifyIdToken(req.token);
        console.log("FIREBASE USER IN AUTHCHECK", firebaseUser);
        req.user = firebaseUser;
        next();
       
    } catch (err) {
        res.status(401).json({
            err: "Invalid or expired token"
        });
    }
};



exports.generateToken = async (req, res, next) => {
    try {
        const firebaseUser = await admin
            .auth()
            .createCustomToken("2L4bcyJbdyff1dWwKWO1IAOM5HR2");
        console.log("Token Generado: " + firebaseUser);
        req.token = firebaseUser;
        next();
    } catch (err) {
        res.status(401).json({
            err: "Failed to generate token",
        });
    }
};
