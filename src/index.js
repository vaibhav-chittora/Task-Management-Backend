import express from "express";
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!, This is an express app");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
