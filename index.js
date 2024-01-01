import connection from "./connection/connection.js"
import express from "express"
import app from "./config/config.js"
import Homepage from "./routes/Homepage.js"
import "./routes/Test.js"
app.listen(3000, (err)=>{
    try{
        console.log({
            message: "Success"
        })
    } catch (err){
        console.log(err)
    }

})