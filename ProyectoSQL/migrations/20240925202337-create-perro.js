'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Perros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      raza: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.FLOAT
      },
      tamano: {
        type: Sequelize.FLOAT
      },
      adoptado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      adoptanteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'adoptantes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Perros');
  }
};