'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoptante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relación uno a muchos con Perro
      Adoptante.hasMany(models.Perro, {
        foreignKey: 'adoptanteId', // Asociado a adoptanteId en el modelo Perro
        as: 'perros',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
    }
  }
  Adoptante.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adoptante',
    tableName: 'adoptantes'
  });
  return Adoptante;
};