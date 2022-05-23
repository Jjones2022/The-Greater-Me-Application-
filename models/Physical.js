const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Physical extends Model {}

Physical.init(
  {
    type: DataTypes.STRING,
    dayOne: DataTypes.STRING,
    dayTwo: DataTypes.STRING,
    dayThree: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Physical;
