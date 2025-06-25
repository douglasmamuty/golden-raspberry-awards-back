/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response,ErrorRequestHandler } from 'express';
import { ApiError } from './apiError';
import { ErrorCodes } from './errorCodes';

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {

  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      error: err.code,
      message: err.message,
    });
  }

  res.status(500).json({
    error: ErrorCodes.INTERNAL_SERVER_ERROR,
    message: ErrorCodes.INTERNAL_SERVER_ERROR,
  });
}
