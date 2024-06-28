import { Router } from "express";
import {
  loginHandler,
  logoutHandler,
  registerHandler,
  refreshTokenHandler,
  verifyEmailHandler,
} from "../controllers/auth.controller";

const authRoutes = Router();

// @route   POST /auth/register
authRoutes.post("/register", registerHandler);
// @route   POST /auth/login
authRoutes.post("/login", loginHandler);
// @route   GEt /auth/logout
authRoutes.get("/logout", logoutHandler);
// @route   GEt /auth/refresh
authRoutes.get("/refresh", refreshTokenHandler);
// @route   GEt /auth/email/verify/:code
authRoutes.get("/email/verify/:code", verifyEmailHandler);

export default authRoutes;
