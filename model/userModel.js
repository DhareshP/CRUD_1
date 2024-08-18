//defining schema and model for user data in MONGOdb
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    address:{
        type:String,
        required : true
    }
})

export default mongoose.model("users", userSchema);
