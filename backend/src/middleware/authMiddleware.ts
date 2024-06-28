require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import catchErrors from "../utils/catchErrors";
import { JWT_SECRET } from "../constants/env";
import AppError from "../utils/AppError";
import { UNAUTHORIZED } from "../constants/http";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const isAuthenticated = catchErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies["accessToken"];
    console.log(token);

    if (!token) {
      return next(
        new AppError(UNAUTHORIZED, "Please login to access this resource")
      );
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET as string);
      req.userId = (decoded as JwtPayload).userId;
      next();
    } catch (error: any) {
      return next(new AppError(UNAUTHORIZED, "Unauthorized"));
    }
  }
);
