const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mob_no: DataTypes.BIGINT,
    password: DataTypes.STRING
}, {
    tableName: 'users',
    timestamps: true
});

module.exports = User;