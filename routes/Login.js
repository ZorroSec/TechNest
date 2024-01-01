import app from "../config/config.js";
import connection from "../connection/connection.js";

export default app.get('/login', (req, res)=>{
    function click__btn__login(){
        const email = req.body.email
        const senha = req.body.senha
        console.log(nome, senha)
    }
    res.render('login', { click__btn__login: click__btn__login() })
})