const mongoose = require("mongoose");

// CONNECTION FUNCTION

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CLOUD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
        });
        console.log("DB CONNECTED");
    } catch (err) {
        console.log("DB CONNECTION ERR", err);
        process.exit(1);
    }
};

module.exports = connectDB;