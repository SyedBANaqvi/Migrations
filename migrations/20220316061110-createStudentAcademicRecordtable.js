'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable(
            'StudentAcademicRecord', {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                rollNo: { type: Sequelize.STRING, allowNull: false },
                obtainedMarks: { type: Sequelize.STRING, allowNull: false },
                percentage: { type: Sequelize.INTEGER, allowNull: false },
                board: { type: Sequelize.STRING, allowNull: false },

                createdAt: { type: Sequelize.DATE, allowNull: false },
                updatedAt: { type: Sequelize.DATE, allowNull: false },
                createdBy: { type: Sequelize.INTEGER },
                updatedBy: { type: Sequelize.INTEGER },
                deleted: { type: Sequelize.BOOLEAN, defaultValue: 0, allowNull: false }
            }, {

            }
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.dropTable('StudentAcademicRecord')
    }
};