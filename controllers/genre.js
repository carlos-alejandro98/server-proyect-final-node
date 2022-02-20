const Genre = require("../models/genre");
const slugify = require("slugify");

exports.createGenre = async (req, res) => {
    try {
        const { name } = req.body;
        res.json(await new Genre({ name, slug: slugify(name) }).save());
    } catch (err) {
        console.log(err);
        res.status(400).send("Create Genre failed");
    }
};

exports.updateStatusGenre = async (req, res) => {
    try {
        const deleted = await Genre.findOneAndUpdate(
            {
                slug: req.params.slug,
            },
            { status: "Inactive" },
            { new: true }
        ).exec();
        res.json(deleted);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Genre deleted failed");
    }
}

exports.getGenre = async (req, res) => {
    const genre = await Genre.find({ 
        status: "Active" 
    }).exec();
    res.json(genre); 
};