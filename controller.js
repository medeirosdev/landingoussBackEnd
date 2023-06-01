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
const Email_1 = require("./email/Email");
class Controller {
    static ResponseBody(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, sobrenome, email, option1, option2 } = req.body;
            if (!nome) {
                res.status(400).json({ message: "O campo 'nome' é obrigatório." });
                return;
            }
            console.log(nome, sobrenome, email, option1, option2);
            const userCreated = {
                nome: nome,
                email: email,
                sobrenome: sobrenome,
                perfil: option1,
                area: option2
            };
            const text = "a";
            const subject = "b";
            //const NewEmail = await Email("contato@zous.com.br" , subject , text , email )
            try {
                const newUser = yield UserModel_1.UserModel.create(userCreated);
                //await enviarEmail(NewEmail);
                yield (0, Email_1.sendEmail)(email, subject, text);
                res.status(200);
            }
            catch (e) {
                res.status(500).json({ message: e });
            }
        });
    }
}
exports.default = Controller;
