const Joi = require('@hapi/joi');
const { DB_CONTRACT } = require('../../db/db.contract');

const errors = {
  id: 'field "ID" is incorrect',
  text: 'field "Text" is incorrect',
  isDone: 'field "Is Done" is incorrect',
  createdAt: 'field "createdAt" is incorrect',
  updatedAt: 'field "updatedAt" is incorrect',
};

const schemaMap = {
  [DB_CONTRACT.common.propertyID]: Joi.string()
    .required()
    .error(new Error(errors.id)),
  [DB_CONTRACT.todo.propertyText]: Joi.string()
    .required()
    .error(new Error(errors.text)),
  [DB_CONTRACT.todo.propertyIsDone]: Joi.bool()
    .required()
    .error(new Error(errors.isDone)),
  [DB_CONTRACT.common.propertyCreatedAt]: Joi.string()
    .optional()
    .error(new Error(errors.createdAt)),
  [DB_CONTRACT.common.propertyUpdatedAt]: Joi.string()
    .optional()
    .error(new Error(errors.updatedAt)),
};

module.exports = Joi.object().keys(schemaMap);
