"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const Sequelize = require('sequelize');
(0, dotenv_1.config)();
const sequelize = new Sequelize('ousslanding', 'root', '@Mango12345', {
    host: 'localhost',
    dialect: 'mysql'
});
// Create a new Sequelize instance
// Synchronize the model with the database
sequelize.sync()
    .then(() => console.log('Models synchronized with MySQL database'))
    .catch((error) => console.error('Error synchronizing models with MySQL database', error));
module.exports = sequelize;
