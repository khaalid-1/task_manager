import asycnHandler from "express-async-handler";
import Task from "../model/taskModel.js";
import mongoose from "mongoose";
export const getTasks = asycnHandler(async(req,res)=>{

    const tasks = await Task.find({});

    res.status(200).json({
        status:true,
        message:tasks
    })
})
export const createTask = asycnHandler(async(req,res)=>{
    const task = req.body;
    if(!task.title || !task.description || !task.status || !task.priority){
        console.log(task)
        res.status(400)
        throw new Error ("Please fill all fileds")
    }
    
    const newTask = new Task(task);
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
    const task = await Task.findById(taskId);
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
    const task = await Task.findById(taskId);
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
    const task = await Task.findById(taskId);
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