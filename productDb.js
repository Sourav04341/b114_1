require("dotenv").config()
const db=require("./db/conn")
const collection=require("./model/model")
const data=require("./product.json")
const send=async()=>{
    try{
        await db(process.env.MONGODB_URL)
        await collection.create(data)
        console.log("sucessful")
    }catch(error){
        if(error) console.log("error")
    }
}
send()