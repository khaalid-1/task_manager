
import express from "express";
import mongoose from "mongoose";

import "colors";
 

const app = express();
 

app.listen(5000, () => {
    console.log(`Server is runnning on port ${5000}`.cyan)
})
