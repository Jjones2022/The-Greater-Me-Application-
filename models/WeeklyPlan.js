const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Plan extends Model {}

Plan.init(
  {
    mental_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    physical_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
  }
);

module.exports = Plan;
