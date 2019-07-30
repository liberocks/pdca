'use strict';
module.exports = (sequelize, DataTypes) => {
  const Check = sequelize.define('Check', {
    completionStatus: DataTypes.BOOLEAN,
    rightnessStatus: DataTypes.BOOLEAN,
    feedback: DataTypes.STRING
  }, {});
  Check.associate = function(models) {
    // associations can be defined here
  };
  return Check;
};