const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Attachment = sequelize.define("attachment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Attachment;
