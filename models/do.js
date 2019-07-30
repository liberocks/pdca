'use strict';
module.exports = (sequelize, DataTypes) => {
  const Do = sequelize.define('Do', {
    id: DataTypes.STRING,
    collectionDate: DataTypes.DATE,
    sender: DataTypes.STRING,
    receiver: DataTypes.STRING,
    document: DataTypes.STRING
  }, {});
  Do.associate = function(models) {
    // associations can be defined here
  };
  return Do;
};