const Platform = require("../models/platform");
const slugify = require("slugify");

exports.createPlatform = async (req, res) => {
    try {
        const { name } = req.body;
        res.json(await new Platform({ name, slug: slugify(name) }).save());
    } catch (err) {
        console.log(err);
        res.status(400).send("Create Platform failed");
    }
};


exports.getPlatforms = async (req, res) => {
    const platform = await Platform.find({ 
        status: "Active" 
    }).exec();
    res.json(platform); 
};