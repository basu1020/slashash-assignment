const dbConfig = require('../config/config')

// We are configuring and initializing connection to our database here using an Object-Relational Mapping (ORM) library 'sequleize' 
const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },

    logging: console.log
})

module.exports = sequelize