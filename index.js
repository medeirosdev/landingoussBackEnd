"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
const app = express();
const port = 3000;
app.use(body_parser_1.default.json());
const Routes = require('./routes');
app.use('/api', Routes);
const UserModel = require('./models/UserModel');
//==================== DB & Routes Start Script=====================//
const conn = require('./db/conn');
//==================================================================//
try {
    conn.sync() // colocar {force: true} ao alterar dados no BD
        .then(() => {
        console.log('server rodando na porta: ', port);
        app.listen(port);
    })
        .catch((err) => { console.log(err); });
}
catch (e) {
    console.log(e);
}
