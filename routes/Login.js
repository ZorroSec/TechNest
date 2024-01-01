import app from "../config/config.js";
import connection from "../connection/connection.js";
import bodyParser from "body-parser";
import fs from "fs"
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

export default app.route('/login').get((req, res)=>{
    res.render('login')
}).post((req, res)=>{
    function click__btn__login(){
        const email = req.body.email
        const senha = req.body.senha
        const dataJson = {
            "email": email,
            "senha": senha
        }
        fs.writeFileSync('routes/logs/user.json', JSON.stringify(dataJson))
        console.log(email, senha)
    }
    res.render('login', { click__btn__login: click__btn__login() })
})
