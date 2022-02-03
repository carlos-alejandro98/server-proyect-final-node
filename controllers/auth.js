const User = require("../models/user");

exports.validateToken = async (req, res, next) => {
    console.log("Token: ", req.token);
    try {
        const firebaseUser = await admin
            .auth()
            .verifyIdToken(req.token);
            console.log("FIREBASE USER IN AUTHCHECK", firebaseUser );
            res.json(firebaseUser);
    } catch (err) {
        res.status(401).json({
            err: "Invalid or expired token",
        });
    }
};
