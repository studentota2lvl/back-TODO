const { HTTP_STATUS_CODES } = require('../../constants');
const { CommonClassError } = require('../common-class.error');

class NotFoundError extends CommonClassError {
  constructor(errMessage) {
    super(errMessage, HTTP_STATUS_CODES.notFound.code, HTTP_STATUS_CODES.notFound.error);
  }
}

module.exports = {
  NotFoundError,
};
