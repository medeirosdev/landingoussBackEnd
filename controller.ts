import { Request , Response } from 'express'
import {UserModel} from "./models/UserModel"
import Sequelize, { Model } from "sequelize";
import nodemailer from 'nodemailer';
import {sendEmail} from './email/Email'
export default class Controller {
    


    static async ResponseBody(req:Request , res:Response){

        
        const { nome, sobrenome, email, option } = req.body;
        if (!nome) {
          res.status(400).json({ message: "O campo 'nome' é obrigatório." });
          return;
        }
        console.log(nome, sobrenome, email, option)
        const userCreated  = {
          nome : nome , 
          email : email ,
          sobrenome : sobrenome ,
          option : option , 
     
        }
        
        try{
          const newUser = await UserModel.create(userCreated)
          res.status(200).json({ message: "Deu certo!"})
        }
        catch(e : any){
          res.status(500).json({ message: e})
        }

        

    }











}