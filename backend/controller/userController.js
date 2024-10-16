import asycnHandler from "express-async-handler";
import mongoose from "mongoose";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { config } from "../config/config.js";
export const getUser = asycnHandler(async(req,res)=>{

    const user = await User.find({});

    res.status(200).json({
        status:true,
        message:user
    })
})
export const registerUser = asycnHandler(async(req,res)=>{
    const user = req.body;
    if(!user.name || !user.email || !user.password  ){
        console.log(task)
        res.status(400)
        throw new Error ("Please fill all fileds")
    }
    
    const newuser = new User(user);
    await newuser.save();
    res.status(200).json({
        status:true,
        task:newuser
    })
})
export const loginUser = asycnHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        
        res.status(400)
        throw new Error ("Please fill all fileds")
    }
    // find user by email 
    const user = await User.findOne({email});

    if(!user){
        res.status(400)
        throw new Error ("Invalid Email or Password")
    }

    // check email is wright
    const ismatchPassword = await bcrypt.compare(password,user.email,)
    if(ismatchPassword){
        res.status(400)
        throw new Error ("Invalid   Password")
    }
    
    res.status(200).json({
        status:true,
        email:user.email,
        password:user.password,
        token:generateToken(user._id)
    })
})
 

const generateToken =(id)=>{
    return jwt.sign({id},config.secretToken,{
        expiresIn:"2D"
    })
}