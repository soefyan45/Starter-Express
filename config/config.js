require("dotenv").config();
const {DB_HOST,DB_DIALECT,DB_PORT,DB_DATABASE,DB_USERNAME,DB_PASSWORD} = process.env;

module.exports ={
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,  
    "database": DB_DATABASE,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test", 
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
