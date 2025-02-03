import { createTask } from "../repositories/task.js";
import { getUserById, updateUserById } from "../repositories/user.js";

export const createTaskService = async ({ title, description, status }) => {
  try {
    const newTask = await createTask({ title, description, status });

    // Update the user's tasks array with the new task's ID
    // const updateUserTasks = await updateUserById(id, {
    //   tasks: [...user.tasks, newTask._id],
    // });

    // await updateUserById(id, {
    //   tasks: [...user.tasks, newTask._id],
    // });
    return newTask;
  } catch (error) {
    console.log("Error in createTaskService", error);

    throw error;
  }
};
