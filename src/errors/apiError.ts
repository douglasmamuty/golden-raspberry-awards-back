/* eslint-disable no-unused-vars */
import { ErrorCodes } from './errorCodes';

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public code: ErrorCodes,
    message?: string
  ) {
    super(message || code);
    this.name = 'ApiError';
  }
}
