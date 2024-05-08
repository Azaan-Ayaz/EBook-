const mongoose = require("mongoose");
// const chalk = require("chalk");
const dotenv = require("dotenv").config();

const dataBase = async () => {
    try {
        const userName = process.env.USER_NAME;
        const userPassword = process.env.USER_PASSWORD;

        await mongoose.connect(`mongodb+srv://${userName}:${userPassword}@cluster0.deanbuu.mongodb.net/Ebook`).then(() => {
            console.log("Database connected successfully");
        })

        
        // console.log(chalk.green("Database connected successfully"));
    } catch (error) {
        console.log("Database connection failed:", error);
    }
};

module.exports = dataBase;
