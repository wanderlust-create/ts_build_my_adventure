import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
// Load Logger
import logger from "../../loaders/logger";

// Error handling function
import ApiError from "../reqBodyValidation/error/apiError";

export default function validateDto(schema: { validate: (arg0: any) => any; }) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBodyData = await schema.validate(req.body);
      // replace req.body with validated values
      req.body = validatedBodyData;
      logger.debug(`AFTER VALIDATION :req body is: ${req.body}`);
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  };
}
