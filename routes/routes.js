import app from "../config/config.js";
app.get('/test', (req, res)=>{
    res.send('tests')
})
export default app.get('/', (req, res)=>{
    res.send('hello')
})