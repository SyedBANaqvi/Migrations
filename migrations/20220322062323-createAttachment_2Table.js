'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable('Attachment_2', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            parent: { type: Sequelize.STRING, allowNull: false },
            parentId: { type: Sequelize.INTEGER, allowNull: false },
            createdAt: { type: Sequelize.DATE, allowNull: false },
            updatedAt: { type: Sequelize.DATE, allowNull: false },
            createdBy: { type: Sequelize.INTEGER },
            updatedBy: { type: Sequelize.INTEGER },
            deleted: { type: Sequelize.BOOLEAN, defaultValue: 0, allowNull: false }
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.dropTable('Attachment_2')
    }
};