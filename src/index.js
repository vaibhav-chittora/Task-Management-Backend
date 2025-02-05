import express from "express";
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routes/apiRouter.js";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

//api routes here
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!, This is an express app");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
