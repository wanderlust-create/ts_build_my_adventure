import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema } from "yup";

// Load Logger
import logger from "../../loaders/logger";

// Error handling function
import ApiError from "../reqBodyValidation/error/apiError";

export default function validateDto(schema: AnyObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.debug(
        `req body validation: Entering validateDto: req body is: ${req.body}`
      );
      const validatedBodyData = await schema.validate(req.body, {
        // returns all errors
        abortEarly: false,
      });
      // replace req.body with validated dto
      req.body = validatedBodyData;
      logger.debug(
        `Req body Validation: Post Schema validation: req body is: ${req.body}`
      );
      next();
    } catch (e) {
      next(ApiError.badRequest(e.errors));
    }
  };
}
