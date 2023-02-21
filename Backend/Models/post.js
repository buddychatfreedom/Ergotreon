const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')
const Creator = require('./creator')

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Post',
  }
)

Post.belongsTo(Creator)
Creator.hasMany(Post)

module.exports = Post
