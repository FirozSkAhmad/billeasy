const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:SUy7viCulO5xt3oEXGUEAj5msNoAz6Oz@dpg-cgc7521mbg55nqhhb4kg-a.oregon-postgres.render.com/billeasydb_d7mo');


const Department = sequelize.define('Department', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    department_name: {
        type: DataTypes.STRING
    },
    employe_count: {
        type: DataTypes.INTEGER,
    },
});

export default Department