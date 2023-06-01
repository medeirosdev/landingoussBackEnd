import Sequelize, { Model } from "sequelize";
const sequelize = require('../db/conn');
// Define a model
const UserModel = sequelize.define('user', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sobrenome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  perfil: {
    type: Sequelize.STRING,
    allowNull: false
  },
  area: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export {UserModel}