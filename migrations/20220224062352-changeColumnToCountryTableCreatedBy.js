'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.changeColumn('Country', 'createdBy', {
            type: Sequelize.INTEGER,
            allowNull: true

        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.changeColumn('Country', 'createdBy', {
            type: Sequelize.INTEGER,
            allowNull: false
        })
    }
};