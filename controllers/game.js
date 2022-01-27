const Game = require("../models/game");
const slugify = require("slugify");


// exports middlewares

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

exports.listAll = async (req, res) => {
    let games = await Game.find({ status: "Active" })
        .limit(parseInt(req.params.count))
        .exec();
    res.json(games);
}