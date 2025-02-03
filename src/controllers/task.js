import { getUserById, updateUserById } from "../repositories/user.js";
import { createTaskService } from "../services/task.js";

export const createTaskController = async (req, res) => {
  try {

    const user = await getUserById(req.user);
    console.log("User in createTaskController", user);

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

    // updating the user's tasks array with the new task's id
    await updateUserById(req.user, {
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
