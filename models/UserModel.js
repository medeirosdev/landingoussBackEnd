"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize = require('../db/conn');
// Define a model
const UserModel = sequelize.define('user', {
    nome: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    sobrenome: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    perfil: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    area: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.UserModel = UserModel;
