import Task from "../schema/task.js";

export const createTask = async ({ title, description, status }) => {
  try {
    const newTask = await Task.create({ title, description, status });
    return newTask;
  } catch (error) {
    console.log("Error in createTask Repository", error);
    throw error;
  }
};

export const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    console.log("Error in getAllTasks Repository", error);
    throw error;
  }
};

export const getTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    return task;
  } catch (error) {
    console.log("Error in getTaskById Repository", error);
    throw error;
  }
};

export const updateTaskById = async (id, updateObject) => {
  try {
    const response = await Task.findByIdAndUpdate(id, updateObject, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log("Error in updateTaskById Repository", error);
    throw error;
  }
};

export const deleteTaskById = async (id) => {
  try {
    const response = await Task.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("Error in Delete Task Repository", error);
    throw error;
  }
};
