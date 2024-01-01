import app from "../config/config.js";

app.get('/', (req, res)=>{
    res.send('hello')
})