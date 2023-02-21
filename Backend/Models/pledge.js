const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')
const Creator = require('./creator')

class Pledge extends Model {}

Pledge.init(
  {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Pledge',
  }
)

Pledge.belongsTo(Creator)
Creator.hasMany(Pledge)

module.exports = Pledge
