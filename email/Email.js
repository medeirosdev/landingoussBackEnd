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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.enviarEmail = exports.Email = void 0;
const axios_1 = __importDefault(require("axios"));
const nodemailer = require("nodemailer");
function Email(fromEmail, subject, text, toemail) {
    return __awaiter(this, void 0, void 0, function* () {
        const Email = `\
  {"key": "md-WAgRCojtZN0459yPhdde0A", 
  "message": {"fromEmail": ${fromEmail}, 
  "subject": ${subject}, "text": ${text}, 
  "to": [{ "email": ${toemail}, "type": "to" }]}}`;
        ``;
        return Email;
    });
}
exports.Email = Email;
function enviarEmail(Email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = 'https://mandrillapp.com/api/1.0/messages/send';
            const headers = {
                'Content-Type': 'application/json'
            };
            const data = {
                MESSAGE: Email
            };
            yield axios_1.default.post(url, data, { headers });
            console.log('Email enviado com sucesso!');
        }
        catch (error) {
            console.error('Erro ao enviar o email:', error);
        }
    });
}
exports.enviarEmail = enviarEmail;
const transporter = nodemailer.createTransport({
    host: "smtp.mandrillapp.com",
    port: 587,
    secureConnection: false,
    auth: {
        user: "Zous",
        pass: "md-WAgRCojtZN0459yPhdde0A", // generated ethereal password
    },
    tls: {
        ciphers: 'SSLv3'
    }
});
// send mail with defined transport object
const sendEmail = (email, subject, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transporter.sendMail({
            from: 'contato@zous.com.br',
            to: email,
            subject: subject,
            text: message,
            html: "<b>Hello world?</b>", // html body
        });
        console.log('Email enviado com sucesso!');
    }
    catch (error) {
        console.error('Ocorreu um erro ao enviar o email:', error);
    }
});
exports.sendEmail = sendEmail;
