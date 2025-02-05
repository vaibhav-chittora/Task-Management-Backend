import express from "express";
import {
  createTaskController,
  deleteTaskByIdController,
  getAllTaskController,
} from "../../controllers/task.js";
import { isAuthenticated } from "../../middlewares/auth.js";

const router = express.Router();

// task related routes

router.post("/create-task", isAuthenticated, createTaskController);

router.get("/all-tasks", isAuthenticated, getAllTaskController);

router.delete("/delete-task/:id", isAuthenticated, deleteTaskByIdController);

export default router;
