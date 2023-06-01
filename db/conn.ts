import { config } from 'dotenv';
const Sequelize = require('sequelize');
config();

const sequelize = new Sequelize('data-usuarios' , 'admindata' ,'Pv482mkTy15', {
  host: 'mysql248.umbler.com' ,
  port: '41890',
  dialect: 'mysql'
})

// Create a new Sequelize instance

//Host: mysql248.umbler.com
//Usuário: admindata
//Senha: Pv482mkTy15
//Nome do banco: data-usuarios


// Synchronize the model with the database
sequelize.sync()
  .then(() => console.log('Models synchronized with MySQL database'))
  .catch((error : any)=> console.error('Error synchronizing models with MySQL database', error));


module.exports = sequelize