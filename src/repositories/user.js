import User from "../schema/user.js";

export const createUser = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    console.log("Error in createUser Repository", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("Error in getUserById Repository", error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log("Error in getUserByEmail Repository", error);
    throw error;
  }
};

export const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    console.log("Error in getUserByUsername Repository", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("Error in getAllUsers Repository", error);
    throw error;
  }
};

export const updateUserById = async (id, updateObject) => {
  try {
    const response = await User.findByIdAndUpdate(id, updateObject, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log("Error in updateUser Repository", updateUserById);
    throw error;
  }
};

export const deleteUserById = async (id) => {
  try {
    const response = await User.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("Error in deleteUser Repository", error);
    throw error;
  }
};
