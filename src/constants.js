const HTTP_STATUS_CODES = {
  ok: {
    code: 200,
  },
  badRequest: {
    code: 400,
    error: 'Bad Request',
  },
  notFound: {
    code: 404,
    error: 'Not Found',
  },
  internalServerError: {
    code: 500,
    error: 'Internal Server Error',
  },
};

const ROUTES_ID = {
  todoID: 'todoID',
};

module.exports = {
  HTTP_STATUS_CODES,
  ROUTES_ID,
};
