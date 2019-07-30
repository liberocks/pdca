'use strict';
module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define('Action', {
    imagePath: DataTypes.STRING,
    isFollowUp: DataTypes.BOOLEAN,
    followUpDate: DataTypes.DATE
  }, {});
  Action.associate = function(models) {
    // associations can be defined here
  };
  return Action;
};