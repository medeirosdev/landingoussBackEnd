import axios from 'axios';
const nodemailer = require("nodemailer");



export async function Email(fromEmail:string,subject:string, text:string, toemail:string ){
  const Email = `\
  {"key": "", 
  "message": {"fromEmail": ${fromEmail}, 
  "subject": ${subject}, "text": ${text}, 
  "to": [{ "email": ${toemail}, "type": "to" }]}}`;
  ``
  return Email;
}


export async function enviarEmail(Email : String): Promise<void> {
  try {
    const url = 'https://mandrillapp.com/api/1.0/messages/send';
    const headers = {
      'Content-Type': 'application/json'
    };
    const data = {
      MESSAGE: Email
    };

    await axios.post(url, data, { headers });

    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
  }
}









const transporter = nodemailer.createTransport({
  host: "smtp.mandrillapp.com",
  port: 587,
  secureConnection: false,
  auth: {
    user: "Zous", // generated ethereal user
    pass: "", // generated ethereal password
  },
  tls: {
    ciphers:'SSLv3'
  }
})
;

// send mail with defined transport object


export const sendEmail = async (email: string, subject: string, message: string) => {
  try {
      await transporter.sendMail({
      from: 'contato@zous.com.br', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao enviar o email:', error);
  }
};




