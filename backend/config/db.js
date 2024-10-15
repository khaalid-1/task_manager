
import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDb= async ()=>{

    try {
        const conn = await mongoose.connect(config.mong_url);
        console.log(`db connection scucesss ${conn.connection.host}`.magenta )
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}