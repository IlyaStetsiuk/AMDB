const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movies',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'reviews',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "movie_id",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
    ]
  });
};
