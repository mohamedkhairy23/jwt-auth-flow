import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import connectToDatabase from "./config/db";
import { APP_ORIGIN } from "./constants/env";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import catchErrors from "./utils/catchErrors";
import { HttpStatusCode, OK } from "./constants/http";
import authRoutes from "./routes/auth.route";
import { isAuthenticated } from "./middleware/authMiddleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.get(
  "/test",
  isAuthenticated,
  catchErrors(async (req: Request, res: Response, next: NextFunction) => {
    return res.status(OK).send({ message: "Test!!!" });
  })
);

app.get(
  "/health",
  catchErrors(async (req: Request, res: Response, next: NextFunction) => {
    return res.status(OK).send({ message: "health OK!" });
  })
);

app.use("/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4004;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDatabase();
});
