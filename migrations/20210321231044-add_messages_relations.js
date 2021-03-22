'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('messages', 'user_id', {
       type: Sequelize.INTEGER,
       references: {
         model: 'users',
         key: 'id'
       },
       onUpdate: 'CASCADE',
       onDelete: 'SET NULL',
       defaultValue: null    
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
