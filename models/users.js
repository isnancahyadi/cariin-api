"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      company: DataTypes.STRING,
      job_title: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      description: DataTypes.STRING,
      domicile: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      photo: {
        type: DataTypes.TEXT,
      },
      skills: DataTypes.ARRAY(DataTypes.STRING),
      role: DataTypes.STRING,
      job_history: DataTypes.ARRAY(DataTypes.JSON),
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
