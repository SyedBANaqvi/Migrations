'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.removeConstraint('Attachment_2', 'FK_Attachment_2_parentId')
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.addConstraint('Attachment_2', {
            fields: ['parentId'],
            type: 'foreign key',
            name: 'FK_Attachment_2_parentId',
            references: { //Required field
                table: 'StudentForm',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    }
};