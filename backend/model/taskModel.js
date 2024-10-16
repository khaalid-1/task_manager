import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        enum:["In Progress","Completed"],
        default:'In Progress'
    },
    priority:{
        type:String,
        enum:["Low","Medium","High"],
        default:"Medium"
    },
},{
    timestamps:true
})

const Task = mongoose.model("Task",taskSchema);

export default Task;