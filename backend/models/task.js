const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Task = sequelize.define('task', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
    title: Sequelize.STRING,
    priority: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fileUrl: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    finalized:{
        type: Sequelize.DATE,
        allowNull: true
    }
});

module.exports = Task;