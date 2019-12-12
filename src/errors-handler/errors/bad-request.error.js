const { HTTP_STATUS_CODES } = require('../../constants');
const { CommonClassError } = require('../common-class.error');

class BadRequestError extends CommonClassError {
  constructor(errMessage) {
    super(errMessage, HTTP_STATUS_CODES.badRequest.code, HTTP_STATUS_CODES.badRequest.error);
  }
}

module.exports = {
  BadRequestError,
};
