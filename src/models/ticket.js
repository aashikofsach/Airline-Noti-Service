"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init(
    {
      subject: { allowNull: false, type: DataTypes.STRING },
      content: { allowNull: false, type: DataTypes.STRING },
      recepientEmail: { allowNull: false, type: DataTypes.STRING },
      status: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["PENDING", "SUCCESS", "FAILURE"],
        defaultValue : "PENDING"
      },
    },
    {
      sequelize,
      modelName: "Ticket",
    },
  );
  return Ticket;
};
