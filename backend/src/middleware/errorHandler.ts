import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`PATH: ${req.path}`, error);
  return res.status(500).json({ message: "Something went wrong" });
};

export default errorHandler;
