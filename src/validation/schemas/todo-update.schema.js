const Joi = require('@hapi/joi');
const { DB_CONTRACT } = require('../../db/db.contract');

const errors = {
  isDone: 'field "Is Done" is incorrect',
};

const schemaMap = {
  [DB_CONTRACT.todo.propertyIsDone]: Joi.bool()
    .required()
    .error(new Error(errors.isDone)),
};

module.exports = Joi.object().keys(schemaMap);
