const Sequelize = require("sequelize")
const sequelize = require('../util/database')

const Comments = sequelize.define("comment",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    commentDescription: {
        type: Sequelize.STRING,
        allowNull: false,
    },
   
   
})


module.exports = Comments;