import app from "../config/config.js";
import connection from "../connection/connection.js";
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

export default app.route('/login').get((req, res)=>{
    res.render('login')
}).post((req, res)=>{
    function click__btn__login(){
        const email = req.body.email
        const senha = req.body.senha
        console.log(email, senha)
    }
    res.render('login', { click__btn__login: click__btn__login() })
})