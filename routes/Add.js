import app from "../config/config.js";
import connection from "../connection/connection.js";
import Posts from "../post/post.js";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import mysql from "mysql2"

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

export default app.route('/add').get((req, res)=>{
    // Posts.create({
    //     nome: "Zezao",
    //     titulo: "Lorem Ispum",
    //     post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //     data: Date()
    // })
    // res.send("this is area opf tests")
    res.render('add')
}).post((req, res)=>{
    res.send('hi')
})