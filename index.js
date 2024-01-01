import connection from "./connection/connection.js"
import express from "express"
import app from "./config/config.js"
import bodyParser from "body-parser"
import"./routes/Homepage.js"
import "./routes/Test.js"
import "./routes/Add.js"
import "./routes/InitialRoute.js"
import "./routes/Login.js"
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(3000, (err)=>{
    try{
        console.log({
            message: "Success"
        })
    } catch (err){
        console.log(err)
    }

})