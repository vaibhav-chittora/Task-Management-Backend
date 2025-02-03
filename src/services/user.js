import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";
import { getUserByEmail, createUser } from "../repositories/user.js";
export async function signUpService(userData) {
  try {
    const user = await getUserByEmail(userData.email);

    if (user) {
      throw {
        success: false,
        status: 400,
        message: "User with same email/username already exists",
      };
    }

    const newUser = await createUser(userData);
    return newUser;
  } catch (error) {
    console.log("Error in signUpService", error);
    if (error.name === "ValidationError") {
      throw {
        success: false,
        status: 400,
        message: error.message,
      };
    }
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw {
        success: false,
        status: 400,
        message: "User with same email/username already exists",
      };
    }
    throw error;
  }
}

export async function signInService(userData) {
  try {
    const user = await getUserByEmail(userData.email);
    if (!user) {
      throw {
        success: false,
        status: 500,
        message: "User not found",
      };
    }

    const isPasswordValid = bcrypt.compareSync(
      userData.password,
      user.password
    );

    if (!isPasswordValid) {
      throw {
        success: false,
        status: 500,
        message: "Invalid password",
      };
    }

    const token = JWT.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return {
      user,
      token,
    };
  } catch (error) {
    console.log("Error in signInService", error);
    if (error.name === "ValidationError") {
      throw {
        success: false,
        status: 400,
        message: error.message,
      };
    }
    throw error;
  }
}
