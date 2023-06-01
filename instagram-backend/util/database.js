const Sequelize = require("sequelize")

const sequelize = new Sequelize("sequelizeinstagram","root","Empg@123",{
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;