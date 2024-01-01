import app from "../config/config.js";

export default app.get('/test', (req, res)=>{
    res.send('Area of Tests')
})