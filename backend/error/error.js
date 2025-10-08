// error.js

// Custom error class to handle errors with status codes
export class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Express error-handling middleware
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "ValidationError") {
    const validationErrors = Object.values(err.errors).map(error => error.message);
    return next(new ErrorHandler(validationErrors.join(", "), 400));
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

