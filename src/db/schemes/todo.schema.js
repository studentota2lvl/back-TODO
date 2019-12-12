const Sequelize = require('sequelize');
const { DB_CONTRACT } = require('../db.contract');

class TodoModel extends Sequelize.Model {}

module.exports = sequelizeInstance => TodoModel.init({
  [DB_CONTRACT.common.propertyID]: {
    type: Sequelize.STRING(255),
    primaryKey: true,
    unique: true,
    allowNull: false,
    field: DB_CONTRACT.common.columnID,
    validate: {
      notEmpty: true,
    },
  },
  [DB_CONTRACT.todo.propertyText]: {
    type: Sequelize.STRING(255),
    field: DB_CONTRACT.todo.columnText,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  [DB_CONTRACT.todo.propertyIsDone]: {
    type: Sequelize.BOOLEAN,
    field: DB_CONTRACT.todo.columnIsDone,
    allowNull: false,
  },
  [DB_CONTRACT.common.propertyCreatedAt]: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: DB_CONTRACT.common.columnCreatedAt,
    validate: {
      isDate: true,
    },
  },
  [DB_CONTRACT.common.propertyUpdatedAt]: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: DB_CONTRACT.common.columnUpdatedAt,
    validate: {
      isDate: true,
    },
  },
}, {
  sequelize: sequelizeInstance,
  modelName: DB_CONTRACT.todo.tableName,
});
