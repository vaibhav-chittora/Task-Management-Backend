import express from "express";
import {
  createTaskController,
  deleteTaskByIdController,
  getAllTaskController,
  getImportantTaskController,
  getPendingTaskController,
  updateImportantTaskByIdController,
  updateTaskByIdController,
} from "../../controllers/task.js";
import { isAuthenticated } from "../../middlewares/auth.js";

const router = express.Router();

// task related routes

router.post("/create-task", isAuthenticated, createTaskController);

router.get("/all-tasks", isAuthenticated, getAllTaskController);

router.get("/important-tasks", isAuthenticated, getImportantTaskController);

router.get("/pending-tasks", isAuthenticated, getPendingTaskController);

router.delete("/delete-task/:id", isAuthenticated, deleteTaskByIdController);

router.put("/update-task/:id", isAuthenticated, updateTaskByIdController);

router.put(
  "/update-task/important/:id",
  isAuthenticated,
  updateImportantTaskByIdController
);

router.put(
  "/update-task/status/:id",
  isAuthenticated,
  updateTaskByIdController
);

export default router;
