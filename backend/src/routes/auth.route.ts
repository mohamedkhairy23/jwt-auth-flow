import { Router } from "express";
import { registerHandler } from "../controllers/auth.controller";

const authRoutes = Router();

// @route   POST /auth/register
authRoutes.post("/register", registerHandler);

export default authRoutes;
