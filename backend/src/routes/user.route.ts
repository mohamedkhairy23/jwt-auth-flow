import { Router } from "express";
import { getUserHandler } from "../controllers/user.controller";

const userRoutes = Router();

// @route   GET /user
userRoutes.get("/", getUserHandler);

export default userRoutes;
