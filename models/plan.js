'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    skpd: DataTypes.STRING,
    types: DataTypes.STRING,
    documents: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here
  };
  return Plan;
};