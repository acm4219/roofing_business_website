const { DataTypes, Sequelize } = require("sequelize");
("use strict");

module.exports = function (sequelize, DataTypes) {
    const Request = sequelize.define("Request", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        homeAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
        },
        insuranceProvider: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
        },
        service: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
        },
        detail: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    });
    return Request;
};