import { Router } from "express";
import { loginHandler, registerHandler } from "../controllers/auth.controller";

const authRoutes = Router();

// @route   POST /auth/register
authRoutes.post("/register", registerHandler);
// @route   POST /auth/login
authRoutes.post("/login", loginHandler);

export default authRoutes;
