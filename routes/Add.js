import app from "../config/config.js";
import connection from "../connection/connection.js";
import Posts from "../post/post.js";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import mysql from "mysql2"

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

export default app.get('/add', (req, res)=>{
    Posts.create({
        nome: "Zezao",
        titulo: "Test1",
        post: "Test post one",
        data: Date()
    })
    res.send("this is area opf tests")
})