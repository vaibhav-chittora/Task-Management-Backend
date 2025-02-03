import { getUserById, updateUserById } from "../repositories/user.js";
import { createTaskService } from "../services/task.js";

export const createTaskController = async (req, res) => {
  try {
    const { id } = req.headers;

    const user = await getUserById(id);

    if (!user) {
      throw {
        success: false,
        status: 400,
        message:
          "Register yourself first, to create a task. If already registered, then signin",
      };
    }

    const { title, description, status } = req.body;

    const newTask = await createTaskService({
      title,
      description,
      status,
    });

    await updateUserById(id, {
      tasks: [...user.tasks, newTask._id],
    });
    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: newTask,
    });
  } catch (error) {
    console.log("Error in createTaskController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating the task",
    });
  }
};
