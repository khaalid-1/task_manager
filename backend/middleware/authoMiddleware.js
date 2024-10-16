import jwb from "jsonwebtoken";
import asycnHandler from "express-async-handler";
import { config } from "../config/config.js"
import User from "../model/userModel.js";


export const protectRoute = asycnHandler(async(req,res,next)=>{
    const token =req.headers.authorization?.split(" ")[1];
    if(!token){
        res.status(403);
        throw new Error("no token no authorization")
    }
    try {
        const decode = jwb.verify(token,config.secretToken);
        req.user = await User.findById(decode.id).select("-password");
        if(!req.user){
            res.status(403)
            throw new Error("user not found ");

        }
        next()
    } catch (error) {
        res.status(403)
        throw new Error("authorization required ");

    }
})