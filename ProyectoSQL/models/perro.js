'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relación muchos a uno con Adoptante
      Perro.belongsTo(models.Adoptante, {
        foreignKey: 'adoptanteId', // Campo adoptanteId referencia a Adoptante
        as: 'adoptante',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Perro.init({
    nombre: DataTypes.STRING,
    raza: DataTypes.STRING,
    edad: DataTypes.FLOAT,
    tamano: DataTypes.FLOAT,
    adoptado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Perro',
    tableName: 'perros'
  });
  return Perro;
};