import { Request , Response } from 'express'
import {UserModel} from "./models/UserModel"
import Sequelize, { Model } from "sequelize";
import nodemailer from 'nodemailer';
import { Email , enviarEmail} from './email/Email'

import {sendEmail} from './email/Email'
export default class Controller {



    static async ResponseBody(req:Request , res:Response){

        
        const { nome, sobrenome, email, option1 , option2 } = req.body;
        if (!nome) {
          res.status(400).json({ message: "O campo 'nome' é obrigatório." });
          return;
        }
        console.log(nome, sobrenome, email, option1 , option2)
        
        const userCreated  = {
          nome : nome , 
          email : email ,
          sobrenome : sobrenome ,
          perfil : option1 , 
          area : option2
     
        }
        const text = "a"
        const subject = "b"
        //const NewEmail = await Email("contato@zous.com.br" , subject , text , email )
        
        try{
          const newUser = await UserModel.create(userCreated)
          //await enviarEmail(NewEmail);
          await sendEmail(email ,subject, text)
          res.status(200)
        }
        catch(e : any){
          res.status(500).json({ message: e})
        }

       

        

    }











}