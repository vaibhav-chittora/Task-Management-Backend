import {
  createTask,
  deleteTaskById,
  updateTaskById,
} from "../repositories/task.js";

export const createTaskService = async ({ title, description, status }) => {
  try {
    const newTask = await createTask({ title, description, status });
    return newTask;
  } catch (error) {
    console.log("Error in createTaskService", error);

    throw error;
  }
};

export const deleteTaskByIdService = async (id) => {
  try {
    const task = await deleteTaskById(id);
    if (!task) {
      throw {
        success: false,
        status: 404,
        message: "No task found with the given id",
      };
    }
    return task;
  } catch (error) {
    console.log("Error in Delete Task Service - ", error);
    throw error;
  }
};

// update task service
export const updateTaskByIdService = async (id, title, description, status) => {
  try {
    const task = await updateTaskById(id, { title, description, status });
    if (!task) {
      throw {
        success: false,
        status: 404,
        message: "No task found with the given id",
      };
    }
    return task;
  } catch (error) {
    console.log("Error in updateTaskService - ", error);
    throw error;
  }
};

export const updateImportantTaskByIdService = async (id, important) => {
  try {
    const task = await updateTaskById(id, { important });
    console.log("Task Data", task);
    if (!task) {
      throw {
        success: false,
        status: 404,
        message: "No task found with the given id",
      };
    }
    return task;
  } catch (error) {
    console.log("Error in updateImportantTaskByIdService", error);
    throw error;
  }
};
