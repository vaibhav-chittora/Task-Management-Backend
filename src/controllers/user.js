import { signInService, signUpService } from "../services/user.js";

export const signUpController = async (req, res) => {
  try {
    const userDetails = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await signUpService(userDetails);
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error in signUpController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong in signUpController",
    });
  }
};

export const signInController = async (req, res) => {
  try {
    const userDetails = {
      email: req.body.email,
      password: req.body.password,
    };
    const user = await signInService(userDetails);
    return res.status(200).json({
      success: true,
      message: "User signed in successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error in signUpController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong in signUpController",
    });
  }
};
