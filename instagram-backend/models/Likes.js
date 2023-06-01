const Sequelize = require("sequelize")
const sequelize = require('../util/database')

const Likes = sequelize.define("like",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    likeType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
   
   
})


module.exports = Likes;