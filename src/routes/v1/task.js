import express from "express";
import { createTaskController } from "../../controllers/task.js";
import { isAuthenticated } from "../../middlewares/auth.js";

const router = express.Router();

// task related routes

router.post("/create-task", isAuthenticated, createTaskController);

export default router;
