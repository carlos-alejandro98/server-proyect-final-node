const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: "Platform is required",
            minlength: [2, "Too short"],
            maxlength: [32, "Too long"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "Inactive"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Platform", platformSchema);