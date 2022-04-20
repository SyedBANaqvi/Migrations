'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.addConstraint('AttachmentFile_2', {
            fields: ['attachment_2_Id'],
            type: 'foreign key',
            name: 'FK_AttachmentFile_2_attachment_2_Id',
            references: { //Required field
                table: 'Attachment_2',
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
        return queryInterface.removeConstraint('AttachmentFile_2', 'FK_AttachmentFile_2_attachment_2_Id')

    }
};