import express from "express";
import {
  getTask,
  createTask,
  updateTask,
  getTasks,
  deleteTask,
} from "../controller/taskController.js";
import { protectRoute } from "../middleware/authoMiddleware.js";
const taskRouter = express.Router();

taskRouter.route("/").get(protectRoute,getTasks).post(protectRoute,createTask);
taskRouter.route("/:id").get(protectRoute,getTask).patch(protectRoute,updateTask).delete(protectRoute,deleteTask);

export default taskRouter;
