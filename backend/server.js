
import express from "express";
import mongoose from "mongoose";
import "colors";
import { config } from "./config/config.js";
import { connectDb } from "./config/db.js";
 

const app = express();
connectDb()

app.listen(config.port, () => {
    console.log(`Server is runnning on port ${config.port}`.cyan)
})
