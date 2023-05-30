
import nodemailer from 'nodemailer'




const transporter= nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: '', // generated ethereal user
    pass: '', // generated ethereal password
  },
});
  
  // Função para enviar o email
  export const sendEmail = async (email: string, subject: string, message: string) => {
    try {
      await transporter.sendMail({
        from: '',
        to: email,
        subject,
        text: message
      });
      console.log('Email enviado com sucesso!');
    } catch (error) {
      console.error('Ocorreu um erro ao enviar o email:', error);
    }
  };



