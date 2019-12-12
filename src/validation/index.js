const Joi = require('@hapi/joi');
const { ValidationError } = require('../errors-handler/errors/validation.error');

const validateValue = schema => (req, res, next) => {
  let value;

  if (Object.keys(req.body).length) value = req.body;
  else if (Object.keys(req.query).length) value = req.query;

  const { error } = Joi.validate(value, schema);

  if (error) throw new ValidationError(error.message);

  next();
};

module.exports = validateValue;
