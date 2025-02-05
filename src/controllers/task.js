import { getUserById, updateUserById } from "../repositories/user.js";
import { createTaskService, deleteTaskByIdService } from "../services/task.js";
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

export const getAllTaskController = async (req, res) => {
  try {
    const user = await getUserById(req.user);
    if (!user) {
      throw {
        success: false,
        status: 400,
        message: "user not found",
      };
    }

    // const tasks = await getAllTaskService();
    return res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: user.tasks,
    });
  } catch (error) {
    console.log("Error in getAllTaskController", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the tasks",
    });
  }
};

// Delete Task Controller
export const deleteTaskByIdController = async (req, res) => {
  try {
    //task id from the params
    const { id } = req.params;
    // user id from the request
    const user = await getUserById(req.user);

    console.log("user in deleteTaskController", user);

    if (!user) {
      throw {
        success: false,
        status: 400,
        message: "user not found",
      };
    }

    console.log("user Tasks", user.tasks);

    // updating the user's tasks array by removing the task with the given id
    await updateUserById(user._id, {
      tasks: user.tasks.filter((task) => task._id.toString() !== id), // filter out the task with the given id
    });

    // deleting the task from the task collection database
    const response = await deleteTaskByIdService(id);

    console.log("User Data after deleting the task", user);

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log("Error in deleteTaskController", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while deleting the task.",
      data: error.message,
    });
  }
};
