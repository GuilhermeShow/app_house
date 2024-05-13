'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Houses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Houses.init({
    image: DataTypes.STRING,
    descricao: DataTypes.STRING,
    localizacao: DataTypes.STRING,
    preco: DataTypes.STRING,
    user_id: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Houses',
  });
  return Houses;
};