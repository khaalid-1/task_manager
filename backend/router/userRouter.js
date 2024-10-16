import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
  
} from "../controller/userController.js";
import { protectRoute } from "../middleware/authoMiddleware.js";
const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/me").get(protectRoute,getUser);
 

export default userRouter;
