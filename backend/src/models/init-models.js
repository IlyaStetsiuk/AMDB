var DataTypes = require("sequelize").DataTypes;
var _actors = require("./actors");
var _award_types = require("./award_types");
var _awards = require("./awards");
var _comments = require("./comments");
var _countries = require("./countries");
var _film_actors = require("./film_actors");
var _film_keywords = require("./film_keywords");
var _genres = require("./genres");
var _goofs = require("./goofs");
var _keywords = require("./keywords");
var _movie_genres = require("./movie_genres");
var _movies = require("./movies");
var _photos = require("./photos");
var _posts = require("./posts");
var _prices = require("./prices");
var _production_companies = require("./production_companies");
var _quotes = require("./quotes");
var _reviews = require("./reviews");
var _trivia = require("./trivia");
var _users = require("./users");
var _video = require("./video");
var _watched_movies = require("./watched_movies");

function initModels(sequelize) {
  var actors = _actors(sequelize, DataTypes);
  var award_types = _award_types(sequelize, DataTypes);
  var awards = _awards(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var film_actors = _film_actors(sequelize, DataTypes);
  var film_keywords = _film_keywords(sequelize, DataTypes);
  var genres = _genres(sequelize, DataTypes);
  var goofs = _goofs(sequelize, DataTypes);
  var keywords = _keywords(sequelize, DataTypes);
  var movie_genres = _movie_genres(sequelize, DataTypes);
  var movies = _movies(sequelize, DataTypes);
  var photos = _photos(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var prices = _prices(sequelize, DataTypes);
  var production_companies = _production_companies(sequelize, DataTypes);
  var quotes = _quotes(sequelize, DataTypes);
  var reviews = _reviews(sequelize, DataTypes);
  var trivia = _trivia(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var video = _video(sequelize, DataTypes);
  var watched_movies = _watched_movies(sequelize, DataTypes);

  film_actors.belongsTo(actors, { as: "actor", foreignKey: "actor_id"});
  actors.hasMany(film_actors, { as: "film_actors", foreignKey: "actor_id"});
  awards.belongsTo(award_types, { as: "award_type", foreignKey: "award_type_id"});
  award_types.hasMany(awards, { as: "awards", foreignKey: "award_type_id"});
  movie_genres.belongsTo(genres, { as: "genre", foreignKey: "genre_id"});
  genres.hasMany(movie_genres, { as: "movie_genres", foreignKey: "genre_id"});
  film_keywords.belongsTo(keywords, { as: "keyword", foreignKey: "keyword_id"});
  keywords.hasMany(film_keywords, { as: "film_keywords", foreignKey: "keyword_id"});
  awards.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(awards, { as: "awards", foreignKey: "movie_id"});
  comments.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(comments, { as: "comments", foreignKey: "movie_id"});
  film_actors.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(film_actors, { as: "film_actors", foreignKey: "movie_id"});
  film_keywords.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(film_keywords, { as: "film_keywords", foreignKey: "movie_id"});
  goofs.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(goofs, { as: "goofs", foreignKey: "movie_id"});
  movie_genres.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(movie_genres, { as: "movie_genres", foreignKey: "movie_id"});
  photos.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(photos, { as: "photos", foreignKey: "movie_id"});
  prices.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(prices, { as: "prices", foreignKey: "movie_id"});
  production_companies.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(production_companies, { as: "production_companies", foreignKey: "movie_id"});
  quotes.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(quotes, { as: "quotes", foreignKey: "movie_id"});
  reviews.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(reviews, { as: "reviews", foreignKey: "movie_id"});
  trivia.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(trivia, { as: "trivia", foreignKey: "movie_id"});
  video.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(video, { as: "videos", foreignKey: "movie_id"});
  watched_movies.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(watched_movies, { as: "watched_movies", foreignKey: "movie_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  posts.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(posts, { as: "posts", foreignKey: "user_id"});
  watched_movies.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(watched_movies, { as: "watched_movies", foreignKey: "user_id"});

  return {
    actors,
    award_types,
    awards,
    comments,
    countries,
    film_actors,
    film_keywords,
    genres,
    goofs,
    keywords,
    movie_genres,
    movies,
    photos,
    posts,
    prices,
    production_companies,
    quotes,
    reviews,
    trivia,
    users,
    video,
    watched_movies,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
