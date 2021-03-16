const { DataTypes, Sequelize } = require("sequelize");
("use strict");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        userName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    });

    return User;
}