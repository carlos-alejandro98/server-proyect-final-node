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

exports.updateStatusPlatform = async (req, res) => {
    try {
        const deleted = await Platform.findOneAndUpdate(
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


exports.getPlatforms = async (req, res) => {
    const platform = await Platform.find({ 
        status: "Active" 
    }).exec();
    res.json(platform); 
};