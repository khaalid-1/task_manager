import express from "express";
import {
  getTask,
  createTask,
  updateTask,
  getTasks,
  deleteTask,
} from "../controller/taskController.js";
const taskRouter = express.Router();

taskRouter.route("/").get(getTasks).post(createTask);
taskRouter.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default taskRouter;
