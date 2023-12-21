const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true
    },

    tag_name:
    {
      type: DataTypes.STRING,

    },
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// const seedProductTags = async () => {
//   await Tag.bulkCreate([tagData]);
// };


module.exports = Tag;
