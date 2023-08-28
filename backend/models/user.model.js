const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/database');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    pixKey: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    "sequelize": sequelize
});

module.exports = User;