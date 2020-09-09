'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    authorId: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    models.post.belongsTo(models.user)
    models.post.belongsToMany(models.user, {through: 'fave'})
    models.post.belongsToMany(models.tag, {through: 'posts_tags'})
  };
  return post;
};