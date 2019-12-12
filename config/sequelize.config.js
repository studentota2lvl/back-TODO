const { db } = require('./config');

module.exports = {
  development: {
    username: db.user,
    password: db.password,
    database: db.name,
    host: db.host,
    dialect: db.dialect,
    dialectOptions: {
      multipleStatements: true,
    },
  },
  production: {
    username: db.user,
    password: db.password,
    database: db.name,
    host: db.host,
    dialect: db.dialect,
    dialectOptions: {
      multipleStatements: true,
    },
  },
};
