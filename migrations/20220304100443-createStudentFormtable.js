'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.createTable(
            'StudentForm', {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                session: { type: Sequelize.STRING(10), allowNull: false },
                month: { type: Sequelize.STRING, allowNull: false },
                year: { type: Sequelize.STRING, allowNull: false },
                admissionDate: { type: Sequelize.DATE, allowNull: false },
                name: { type: Sequelize.STRING, allowNull: false },
                dob: { type: Sequelize.DATE, allowNull: false },
                gender: { type: Sequelize.STRING, allowNull: false },
                markOfIdentification: { type: Sequelize.STRING, allowNull: false },
                countryCode: { type: Sequelize.STRING, allowNull: false },
                mobileNumber: { type: Sequelize.STRING, allowNull: false },
                email: { type: Sequelize.STRING, unique: true, allowNull: false },
                cnicType: { type: Sequelize.STRING, allowNull: false },
                cnicId: { type: Sequelize.STRING, allowNull: false },
                religion: { type: Sequelize.STRING, allowNull: false },
                nationality: { type: Sequelize.STRING, allowNull: false },
                emergencyContactCode: { type: Sequelize.STRING, allowNull: false },
                emergencyContactNumber: { type: Sequelize.STRING, allowNull: false },
                postalCity: { type: Sequelize.STRING, allowNull: false },
                postalAddress: { type: Sequelize.STRING, allowNull: false },
                permanentCity: { type: Sequelize.STRING, allowNull: false },
                permanentAddress: { type: Sequelize.STRING, allowNull: false },
                domicileCity: { type: Sequelize.STRING, allowNull: false },
                domicileProvince: { type: Sequelize.STRING, allowNull: false },
                domicileTehsil: { type: Sequelize.STRING, allowNull: false },
                admissionType: { type: Sequelize.STRING, allowNull: false },
                guardianType: { type: Sequelize.STRING, allowNull: false },
                guardianName: { type: Sequelize.STRING, allowNull: false },
                guardianCnic: { type: Sequelize.STRING, allowNull: false },
                guardianCountry: { type: Sequelize.STRING, allowNull: false },
                guardianMobileNumber: { type: Sequelize.STRING, allowNull: false },
                createdAt: { type: Sequelize.DATE, allowNull: false },
                updatedAt: { type: Sequelize.DATE, allowNull: false },
                createdBy: { type: Sequelize.INTEGER },
                updatedBy: { type: Sequelize.INTEGER },
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
        return queryInterface.dropTable('StudentForm')
    }
};