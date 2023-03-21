const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:SUy7viCulO5xt3oEXGUEAj5msNoAz6Oz@dpg-cgc7521mbg55nqhhb4kg-a.oregon-postgres.render.com/billeasydb_d7mo');


const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    deparment_id: {
        type: DataTypes.INTEGER,
    },
    joining_date: {
        type: DataTypes.DATE,
    }

});

export default Employee