import asycnHandler from "express-async-handler";
import Task from "../model/taskModel.js";
import mongoose from "mongoose";
export const getTasks = asycnHandler(async(req,res)=>{

    const tasks = await Task.find({});

    res.status(200).json({
        status:true,
        data:tasks
    })
})
export const createTask = asycnHandler(async(req,res)=>{
    const {title ,description,
        status,
        priority } = req.body;
    if(!title || !description || !status || !priority){
        
        res.status(400)
        throw new Error ("Please fill all fileds")
    }

    
    const newTask = new Task({
        title,description,priority,status
    });
    await newTask.save();
    res.status(200).json({
        status:true,
        task:newTask
    })
})
export const getTask = asycnHandler(async(req,res)=>{
   const taskId =req.params.id;
    if (!mongoose.isValidObjectId(taskId)) {
        res.status(400);
        throw new Error("Invalid Task ID")
    }
    const task = await Task.findOne({ _id: taskId, user: req.user._id });
    if(!task){
        res.status(400);
        throw new Error("task id not found ")
    }
    res.status(200).json({
        status:true,
        message:task
    })
})
export const updateTask = asycnHandler(async(req,res)=>{
    const taskId =req.params.id;
    if (!mongoose.isValidObjectId(taskId)) {
        res.status(400);
        throw new Error("Invalid Task ID")
    }
    const task = await Task.findOne({ _id: taskId, user: req.user._id });
    if(!task){
        res.status(400);
        throw new Error("task id not found ")
    }
    const updateData = await Task.findByIdAndUpdate(taskId,req.body,{new:true})
    res.status(200).json({
        status:true,
        message:updateData
    })
})

export const deleteTask =asycnHandler(async(req,res)=>{
    const taskId =req.params.id;
    if (!mongoose.isValidObjectId(taskId)) {
        res.status(400);
        throw new Error("Invalid Task ID")
    }
    const task = await Task.findOne({ _id: taskId, user: req.user._id });
    if(!task){
        res.status(400);
        throw new Error("task id not found ")
    }
    const updateData = await Task.findByIdAndDelete(taskId)
    res.status(204).json({
        status:true,
        message:updateData
    })
})