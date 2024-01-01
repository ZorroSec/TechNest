import app from "../config/config.js";
import connection from "../connection/connection.js";

export default app.get('/login', (req, res)=>{
    res.render('login')
})