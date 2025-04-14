const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movie_genres', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'genres',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'movie_genres',
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
      {
        name: "genre_id",
        using: "BTREE",
        fields: [
          { name: "genre_id" },
        ]
      },
    ]
  });
};
