import { getUserById, updateUserById } from "../repositories/user.js";
import {
  createTaskService,
  deleteTaskByIdService,
  getImportantTaskService,
  getPendingTaskService,
  updateImportantTaskByIdService,
  updateTaskByIdService,
} from "../services/task.js";
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

// get all important tasks
export const getImportantTaskController = async (req, res) => {
  try {
    const tasks = await getImportantTaskService();

    // console.log(  "tasks in getImportantTaskController",tasks.filter((task) => task.important));

    //fetching only the important tasks
    const importantTasks = tasks.filter((task) => task.important);

    // const importantTasks =
    return res.status(200).json({
      success: true,
      message: "Important Tasks fetched successfully",
      data: importantTasks,
    });
  } catch (error) {
    console.log("Error in getImportantTaskController", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the important tasks",
    });
  }
};

// get all pending tasks

export const getPendingTaskController = async (req, res) => {
  try {
    const tasks = await getPendingTaskService();

    console.log("tasks in getPendingTaskController", tasks);
    const pendingtasks = tasks.filter((task) => task.status === "pending");
    return res.status(200).json({
      success: true,
      message: "Pending Tasks fetched successfully",
      data: pendingtasks,
    });
  } catch (error) {
    console.log("Error in getPendingTaskController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the pending tasks",
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

export const updateTaskByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updatedTask = await updateTaskByIdService(
      id,
      title,
      description,
      status
    );
    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    console.log("Error in updateTaskByIdController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating the task.",
      data: error.message,
    });
  }
};

export const updateImportantTaskByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    // const { important } = req.body;
    let { important } = req.body;

    // Convert "true"/"false" (string) to actual boolean values
    important = JSON.parse(important === "true" ? "true" : "false");

    const updatedTask = await updateImportantTaskByIdService(id, important);
    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    console.log("Error in updateImportantTaskByIdController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating the task.",
      data: error.message,
    });
  }
};
