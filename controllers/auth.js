const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
    const { email } = req.user;

    const user = await User.findOneAndUpdate(
        { email },
        { name: email.split("@")[0] },
        { new: true }
    );

    if (user) {
        console.log("USER UPDATE", user);
        res.json(user);
    } else {
        const newUser = await new User({
            email,
            name: email.split("@")[0]
        }).save();
        console.log("USER CREATED", newUser);
    }
};

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
