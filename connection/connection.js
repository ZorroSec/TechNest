import mysql from 'mysql2'

export default connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'technest'
})

