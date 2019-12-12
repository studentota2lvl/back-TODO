const { CommonClassError } = require('./common-class.error');
const { HTTP_STATUS_CODES } = require('../constants');

module.exports = (errObject, res) => {
  if (errObject instanceof CommonClassError) {
    res.status(errObject.code).send(errObject.createResponse());

    return;
  }

  console.log('~~~~~~~~~~errors-handler- - err~~~~~~~~~~\n', JSON.stringify(errObject.message));

  res.status(HTTP_STATUS_CODES.internalServerError.code).send({
    code: HTTP_STATUS_CODES.internalServerError.code,
    error: HTTP_STATUS_CODES.internalServerError.error,
    message: errObject.message,
  });
};
