import connection from "../connection/connection.js";
import app from "../config/config.js";
import Comentarios from "../comentarios/comentarios.js";

export default app.route('/post/:id').get((req, res)=>{
    const id = req.params.id
    connection.query(`SELECT * FROM posts WHERE id = ${id}`, (results, post)=>{
        connection.query(`SELECT * FROM comentarios WHERE idpost = ${id}`, (results, comentario)=>{
            res.render('post', { post: post, comentario: comentario })
        })
    })
})