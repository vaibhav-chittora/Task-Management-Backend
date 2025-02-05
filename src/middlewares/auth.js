import { JWT_SECRET } from "../config/serverConfig.js";
import JWT from "jsonwebtoken";
import { getUserById } from "../repositories/user.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    // get the token from the request headers
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Token is Required for authentication.",
      });
    }

    // verifying the token using JWT
    const response = JWT.verify(token, JWT_SECRET);
    // console.log("response", response);

    // if token is invalid or expired
    if (!response) {
      return res.status(403).json({
        success: false,
        message: "Invalid token",
      });
    }

    // getting the user from the database
    const user = await getUserById(response.id);

    // attaching the user to the request object
    req.user = user.id;

    // calling the next middleware
    next();
  } catch (error) {
    console.log("Error in isAuthenticated middleware", error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired, Signin again to get a new token",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong while authenticating the user",
    });
  }
};
