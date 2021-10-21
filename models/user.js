const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type : Sequelize.DataTypes.STRING
    },
    designation: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    phone : {
        type : Sequelize.DataTypes.INTEGER
    },
});


module.exports = User;

