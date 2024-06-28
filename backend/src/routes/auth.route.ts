import { Router } from "express";
import {
  loginHandler,
  logoutHandler,
  registerHandler,
  refreshTokenHandler,
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

export default authRoutes;
