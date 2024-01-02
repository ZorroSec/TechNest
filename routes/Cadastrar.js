import connection from "../connection/connection.js";
import Posts from "../post/post.js";
import app from "../config/config.js";

export default app.route('/cadastro').get((req, res)=>{
    res.render('cadastro')
}).post((req, res)=>{

})