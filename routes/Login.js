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
        console.log(email, senha)
        connection.query(`SELECT * FROM logins WHERE senha = ${senha}`, (results, fields)=>{
            if(fields[0]['email'] === email && fields[0]['senha'] === senha){
                const dataJson = fields[0]
                fs.writeFileSync(`routes/logs/${email}.json`, JSON.stringify(dataJson))
                console.log(fields)
                res.redirect('/homepage')
            } else{
                res.redirect('/login')
            }
        })
    }
    res.render('login', { click__btn__login: click__btn__login() })
})
