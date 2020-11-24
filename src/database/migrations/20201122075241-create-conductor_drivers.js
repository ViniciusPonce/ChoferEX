'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('conductor_drivers', {
       id: {
         type:Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       user_id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'users',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
       },
       cnh_number:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       expiration_cnh: {
        type: Sequelize.DATE,
        allowNull: false,
       },
       obs_ear:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
       },
       vehicle_model:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       vehicle_brand:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       vehicle_year:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       vehicle_licensing:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
       },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
      });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('conductor_drivers');

  }
};
