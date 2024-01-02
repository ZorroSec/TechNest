import app from "../config/config.js";
import mysql from "mysql2"
import connection from "../connection/connection.js";
import { engine } from "express-handlebars"
import bodyParser from "body-parser";
import Posts from "../post/post.js";
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

export default app.get('/homepage', (req, res)=>{
    connection.query("SELECT * FROM posts ORDER BY id DESC", (results, fields)=>{
        res.render('home', { posts: fields })
    })
})