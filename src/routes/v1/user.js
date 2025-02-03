import express from "express";
import { signInController, signUpController } from "../../controllers/user.js";

const router = express.Router();

// user routes here

// Auth routes - signup, signin
router.post("/signup", signUpController);

router.post("/signin", signInController);

export default router;
