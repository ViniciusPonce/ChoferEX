'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('cards', {
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
       final_number:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       due_date: {
        type: Sequelize.DATE,
        allowNull: false,
       },
       cvv:{
        type: Sequelize.INTEGER,
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

    await queryInterface.dropTable('cards');

  }
};
