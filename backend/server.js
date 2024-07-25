import express from "express"
import cors from "cors"



//app config
const app=express();
const port=4000;


//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//mongodb+srv://harnivazsingh29:Nivaz@2902@cluster0.mq8icyh.mongodb.net
//mongodb+srv://harnivazsingh29:Nivaz@2902@cluster0.mq8icyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0