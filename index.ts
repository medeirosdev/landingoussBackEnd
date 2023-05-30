const express = require('express')
import { Request, Response } from 'express';
import bodyParser from 'body-parser';



const app = express();
const port = 3000;

app.use(bodyParser.json());

const Routes = require('./routes')

app.use('/api' , Routes)

const UserModel = require('./models/UserModel')
//==================== DB & Routes Start Script=====================//
const conn = require('./db/conn');
//==================================================================//
try{
    conn.sync()// colocar {force: true} ao alterar dados no BD
.then( ()=> {
    console.log('server rodando na porta: ', port)
    app.listen(port)
})
.catch((err : any)=> {console.log(err)})
}catch(e:any){
    console.log(e)
}