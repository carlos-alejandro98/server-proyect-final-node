const Game = require("../models/game");
const slugify = require("slugify");


// exports middlewares

exports.getGamesAll = async (req, res) => {
    const game = await Game.find({ 
        status: "Active" 
    }).exec();
    res.json(game); 
};

exports.createGame = async (req, res) => {
    try {
        console.log(req.body);
        req.body.slug = slugify(req.body.title);
        const newGame = await new Game(req.body).save();
        res.json(newGame);
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
};

exports.gamesCount = async (req, res) => {
    let total = await Game.find({ status: "Active" }).estimatedDocumentCount().exec();
    res.json(total);
}

exports.getGamesByNumber = async (req, res) => {
    let games = await Game.find({ status: "Active" })
        .limit(parseInt(req.params.count))
        .exec();
    res.json(games);
}

exports.softRemoveGame = async (req, res) => {
    try {
        const deleted = await Game.findOneAndUpdate(
            {
                slug: req.params.slug,
            },
            { status: "Inactive" },
            { new: true }
        ).exec();
        res.json(deleted);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Product deleted failed");
    }
}

exports.removeGame = async (req, res) => {
    try {
        const deleted = await Game.findOneAndRemove({
            slug: req.params.slug,
        }).exec();
        res.json(deleted);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Product delete failed");
    }
}

exports.readGame = async (req, res) => {
    const game = await Game.findOne({ 
        slug: req.params.slug, 
        status: "Active" 
    }).exec();
    res.json(game); 
}

exports.updateGame = async (req, res) => {
    try {
        if(req.body.title){
            req.body.slug = slugify(req.body.title);
        }
        const updated = await Game.findOneAndUpdate(
            { slug: req.params.slug },
            req.body,
            { new: true }
        ).exec();
        res.json(updated);
    } catch (err) {
        console.log("Product Update Error -----> ", err);
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
}
