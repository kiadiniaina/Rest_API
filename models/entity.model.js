const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Entity = sequelize.define(
  "Entity",
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    siret: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
    },
    keyLicence: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Entity;
