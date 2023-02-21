const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

class Creator extends Model {}

Creator.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Creator',
  }
)

module.exports = Creator
