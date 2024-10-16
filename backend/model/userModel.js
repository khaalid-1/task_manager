import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required :[true,'Username required']
    },
    email:{
        type:String,
        required :[true,'Email required'],
        unique:true
    },
    password:{
        type:String,
        required :[true,'Password required'],

    },
},{
    timestamps:true
})

userSchema.pre("save",async function(next){

    if(!this.isModified('password')) return next();

        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password,salt);
            next()
        } catch (error) {
            next(error)
        }
       
     
})

userSchema.methods.comparePassword = async function(currentPassword){
    return await bcrypt.compare(currentPassword,this.password)
}

const User = mongoose.model("User",userSchema);

export default User ;
 