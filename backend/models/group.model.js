const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Group = sequelize.define('Group', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Group;
