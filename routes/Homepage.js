import app from "../config/config.js";
import mysql from "mysql2"
import connection from "../connection/connection.js";
import { engine } from "express-handlebars"
import bodyParser from "body-parser";
import Posts from "../post/post.js";
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

export default app.get('/', (req, res)=>{
    Posts.findAll().then((data)=>{
        res.render('hello')
        console.log(data)
    })
})