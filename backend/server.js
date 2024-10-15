
import express from "express";
import mongoose from "mongoose";
import "colors";
import { config } from "./config/config.js";
import { connectDb } from "./config/db.js";
import taskRouter from "./router/taskRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
connectDb()

// middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.use("/api/v1/tasks",taskRouter)

app.use(errorHandler);
app.listen(config.port, () => {
    console.log(`Server is runnning on port ${config.port}`.cyan)
})
