const { ROUTES_ID } = require('../constants');

const TODO = {
  root: 'todo',
  list: 'list',
  byID: `:${ROUTES_ID.todoID}`,
};

module.exports = {
  TODO,
};
