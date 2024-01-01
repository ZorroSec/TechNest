import app from "../config/config.js";

export default app.get('/', (req, res)=>{
    res.send('hello')
})