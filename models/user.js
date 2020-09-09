'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    about: DataTypes.TEXT
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    models.user.hasMany(models.post)
    models.user.belongsToMany(models.post, {through: 'fave'})
  };
  return user;
};