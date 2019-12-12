const Sequelize = require('sequelize');
const { db } = require('../../config/config');
const todoInstance = require('./schemes/todo.schema');

const sequelize = new Sequelize(
  db.name,
  db.user,
  db.password,
  {
    host: db.host,
    dialect: db.dialect,
    dialectOptions: {
      multipleStatements: true,
    },
    logging: false,
    define: {
      timestamps: true,
      charset: db.charset,
    },
    pool: {
      max: db.connectionLimitMax,
      min: db.connectionLimitMin,
      idle: db.idle,
    },
  }
);

const todoModel = todoInstance(sequelize);

// IMPORTANT: The order is important. Make sure that the table that has foreign keys will be created after the main table
const models = [
  todoModel,
];

const createTables = async () => {
  // can not use Promise.all because the order of tables is important
  for (const model of models) {
    await model.sync({ force: false });
  }
};

module.exports = {
  createTables,
  todoModel,
};
