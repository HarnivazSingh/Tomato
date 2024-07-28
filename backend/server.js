import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"; 
import {foodRouter} from "./routes/foodRoute.js";
import {userRouter} from "./routes/userRoute.js";
import 'dotenv/config'
import { cartRouter } from "./routes/cartRoute.js";
import { orderRouter } from "./routes/orderRoute.js";

//app config
const app=express();
const port=4000;


//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API working")
})

//DB connection
connectDB();

//api endpoint
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//mongodb+srv://harnivazsingh29:Nivaz@2902@cluster0.mq8icyh.mongodb.net
//mongodb+srv://harnivazsingh29:Nivaz@2902@cluster0.mq8icyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0