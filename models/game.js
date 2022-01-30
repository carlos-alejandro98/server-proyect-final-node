const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const gameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: "Title is required",
            minlength: [2, "Too short"],
            maxlength: [50, "Too long"],
            text: true,
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
            maxlength: 2000,
            text: true,
        },
        genre: String,
        url: String,
        platform: {
            type: ObjectId,
            ref: "Platform",
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "Inactive"],
        }, 
        mainImage: {
            type: String,
            trim: true,
            required: true,
            text: true,
        },
        gameImages: {
            type: Array 
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);