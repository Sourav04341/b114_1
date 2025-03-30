require('dotenv').config()
const express=require("express")
const app=express()
const PORT=process.env.PORT || 5000
const dbconnect=require('./db/conn')


app.get("/",(req,res)=>{
    res.send("server is running")
})

const connect=async()=>{
    try{
        await dbconnect(process.env.MONGODB_URL)
        console.log("connected")
    }catch(error){
        if(err) console.log(error)
    }
}

app.listen(PORT,()=>{
    console.log(`${PORT}:is running`)
})
connect()