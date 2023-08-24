require('dotenv').config()

// Note - create the database 'omdbapp_db' before in mysql in the local computer, then only this config will work
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.DB_PASSWORD,
  DB: "omdbapp_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}