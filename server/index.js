require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models")

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

const app = express();

start();