const { HTTP_STATUS_CODES } = require('../constants');

class CommonClassError extends Error {
  constructor(
    message,
    code = HTTP_STATUS_CODES.internalServerError.code,
    httpError = HTTP_STATUS_CODES.internalServerError.error,
  ) {
    super();
    this.code = code;
    this.httpError = httpError;

    // do not change this IF because this.message is Error object's property
    if (message) this.message = message;
  }

  createResponse() {
    return {
      code: this.code,
      error: this.httpError,
      message: this.message,
    };
  }
}

module.exports = {
  CommonClassError,
};
