const admin = require("../firebase");
const User = require("../models/user");


// middlewares validation
exports.generateToken = async (req, res, next) => {
    try {
        const firebaseUser = await admin
            .auth()
            .createCustomToken("token");
            req.token = firebaseUser;
            next();
    } catch (err) {
        res.status(401).json({
            err: "Failed to generate token",
        });
    }
};
