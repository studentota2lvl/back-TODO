const router = require('express').Router();
const { TODO } = require('./route.contract');
const { HTTP_STATUS_CODES } = require('../constants');
const todoRouter = require('../routes/todo');

module.exports = app => {
  app.use('/', router);

  router.use(`/api/${TODO.root}`, todoRouter);

  // Handle 404
  app.use((req, res) => {
    res.status(HTTP_STATUS_CODES.notFound.code).send('This endpoint was not found');
  });
};
