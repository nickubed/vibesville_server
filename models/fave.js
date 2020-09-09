'use strict';
module.exports = (sequelize, DataTypes) => {
  const fave = sequelize.define('fave', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  fave.associate = function(models) {
    // associations can be defined here
  };
  return fave;
};