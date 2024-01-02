import connection from "../connection/connection.js";
import Logins from "../login/login.js";
import app from "../config/config.js";

export default app.route('/cadastro').get((req, res)=>{
    res.render('cadastro')
}).post((req, res)=>{
    function cadastro__btn(){
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        console.log({nome: nome, email: email, senha: senha})
        Logins.create({
            nome: nome,
            email: email,
            senha: senha
        })
        res.redirect('/login')
    }
    res.render('cadastro', { cadastro__btn: cadastro__btn() })
})