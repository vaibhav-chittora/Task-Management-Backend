import express from "express";
import { createTaskController } from "../../controllers/task.js";

const router = express.Router();

// task related routes

router.post("/create-task", createTaskController);

export default router;
