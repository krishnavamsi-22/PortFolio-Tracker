const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Stock = sequelize.define("Stock", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ticker: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  buyPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Stock;
