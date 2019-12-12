const Joi = require('@hapi/joi');
const { DB_CONTRACT } = require('../../db/db.contract');

const errors = {
  id: 'field "ID" is missing or incorrect',
  text: 'field "Text" is missing or incorrect',
  isDone: 'field "Is Done" is missing or incorrect',
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
};

module.exports = Joi.object().keys(schemaMap);
