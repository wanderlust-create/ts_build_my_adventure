import logger from "../../../loaders/logger"

export default class ApiError {
  code: number;
  message: string;
  constructor(code: number, message: string) {
    logger.debug(`ENTERING ApiError- top: message ${message} code: ${code}`)
    this.message = message;
    this.code = code;
  }
  static badRequest(msg: string) {
    logger.debug(`ENTERING ApiError- bad req ${msg}`)
    return new ApiError(400, msg);
  }
}
