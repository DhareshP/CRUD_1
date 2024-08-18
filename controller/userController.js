//handelling business logic and interaction for user model
import User from "../model/userModel.js";

export const create = async(req, res)=>{
    try {

        const userData = new User(req.body);
        const{email} = userData;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User Exists"});
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser);
    }catch (error) {
        res.status(500).json({error:"Internal server error1"});
    }
};
export const fetch = async(req, res)=>{
    try {
        const users = await User.find();
        if(users.length ==0){
            return res.status(404).json({messages:"user not found"});
        }
        res.status(200).json(users);
    }catch (error) {
        res.status(500).json({error:"Internal server error2"});        
    }
};

export const update = async(req, res)=>{
    try {
        const id = req.param.id;

        const userExist = await User.findOne({ _id:id })
        if(!userExist){
             return res.status(404).json({messages:"user not found"});
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true})
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({error:"Internal server error3"});
    }
};

export const deteleUser = async (req, res) => {
    try {
        const id = req.param.id;

        const userExist = await User.findOne({ _id:id })
        if(!userExist){
             return res.status(404).json({message:"user not found"});
        }
        await User.findByIdAndDelete(id);
        return res.status(201).json({messages:"user deleted"});
    } catch (error) {
        res.status(500).json({error:"Internal server error4"});
    }
}


