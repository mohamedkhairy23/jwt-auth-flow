import { Router } from "express";
import {
  loginHandler,
  logoutHandler,
  registerHandler,
} from "../controllers/auth.controller";

const authRoutes = Router();

// @route   POST /auth/register
authRoutes.post("/register", registerHandler);
// @route   POST /auth/login
authRoutes.post("/login", loginHandler);
// @route   GEt /auth/logout
authRoutes.get("/logout", logoutHandler);

export default authRoutes;
