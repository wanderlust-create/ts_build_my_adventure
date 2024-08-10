import ApiError from "./apiError";
import logger from "../../../loaders/logger";
import { Request, Response, NextFunction } from "express";

export default function apiErrorHandler(
  err: { code: number; message: any; },
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    logger.debug("ENTERING ApiErrorHandler try");
    logger.error(err);
  } catch (error) {
    logger.debug("ENTERING ApiErrorHandler catch");
    console.error("Error occurred during logging:", error);
  }

  if (err instanceof ApiError) {
    logger.debug("ENTERING apiErrorHandler");
    return res.status(err.code).json(err.message);
  }

  return res.status(500).json("Internal Server Error");
  }
