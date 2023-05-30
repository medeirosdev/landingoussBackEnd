"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("./models/UserModel");
class Controller {
    static ResponseBody(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, sobrenome, email, option } = req.body;
            if (!nome) {
                res.status(400).json({ message: "O campo 'nome' é obrigatório." });
                return;
            }
            console.log(nome, sobrenome, email, option);
            const userCreated = {
                nome: nome,
                email: email,
                sobrenome: sobrenome,
                option: option,
            };
            try {
                const newUser = yield UserModel_1.UserModel.create(userCreated);
                res.status(200).json({ message: "Deu certo!" });
            }
            catch (e) {
                res.status(500).json({ message: e });
            }
        });
    }
}
exports.default = Controller;
