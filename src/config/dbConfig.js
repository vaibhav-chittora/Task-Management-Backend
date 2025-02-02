import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function () {
  try {
    await mongoose.connect(DB_URL);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(`Error connecting to the database ${error.message}`);
  }
}
