'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.addConstraint('StudentAcademicRecord', {
            fields: ['studentId'],
            type: 'foreign key',
            name: 'FK_StudentAcademicRecord_studentId',
            references: { //Required field
                table: 'StudentForm',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        queryInterface.removeConstraint('StudentAcademicRecord', 'FK_StudentAcademicRecord_studentId')
    }
};