const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");
const Entity = require("./entity.model");

const UserEntity = sequelize.define(
  "UserEntity",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    entityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Entity,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UserEntity;
