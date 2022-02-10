'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        return queryInterface.addColumn('teacherTable', 'courseId', { type: Sequelize.INTEGER });


    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         * 
         */
        return queryInterface.removeColumn(
            'teacherTable',
            'courseId'
        );
    }
};