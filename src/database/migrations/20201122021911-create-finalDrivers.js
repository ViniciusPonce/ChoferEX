'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('final_drivers', {
       id: {
         type:Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       user_id:{
        type:Sequelize.INTEGER,
        allowNull: true,
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

    await queryInterface.dropTable('final_drivers');

  }
};
