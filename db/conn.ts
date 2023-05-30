import { config } from 'dotenv';
const Sequelize = require('sequelize');
config();

const sequelize = new Sequelize('ousslanding' , 'root' ,'', {
  host: 'localhost' ,
  dialect: 'mysql'
})

// Create a new Sequelize instance




// Synchronize the model with the database
sequelize.sync()
  .then(() => console.log('Models synchronized with MySQL database'))
  .catch((error : any)=> console.error('Error synchronizing models with MySQL database', error));


module.exports = sequelize