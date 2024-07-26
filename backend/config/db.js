import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://harnivazsingh29:Nivaz%402902@cluster0.mq8icyh.mongodb.net/Tomato').then(()=>console.log("DB connected"))
}