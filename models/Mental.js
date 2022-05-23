const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Mental extends Model {}

Mental.init(
  {
    type: DataTypes.STRING,
    url: DataTypes.STRING,
    length: DataTypes.STRING,
    content: DataTypes.STRING,
    title: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Mental;
