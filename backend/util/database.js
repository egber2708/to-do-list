const Sequelize = require('sequelize');

const sequelize = new Sequelize('tododb', 'root', '72289102', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;