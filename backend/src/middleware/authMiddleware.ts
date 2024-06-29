require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import catchErrors from "../utils/catchErrors";
import { JWT_SECRET } from "../constants/env";
import AppError from "../utils/AppError";
import { UNAUTHORIZED } from "../constants/http";
import AppErrorCode from "../constants/appErrorCode";
import appAssert from "../utils/AppAssert";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      sessionId: string;
    }
  }
}

export const isAuthenticated = catchErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies["accessToken"];

    appAssert(
      accessToken,
      UNAUTHORIZED,
      "Not authorized",
      AppErrorCode.InvalidAccessToken
    );

    try {
      const decoded = jwt.verify(accessToken, JWT_SECRET as string);
      req.userId = (decoded as JwtPayload).userId;
      req.sessionId = (decoded as JwtPayload).sessionId;
      next();
    } catch (error: any) {
      return next(new AppError(UNAUTHORIZED, "Unauthorized"));
    }
  }
);
