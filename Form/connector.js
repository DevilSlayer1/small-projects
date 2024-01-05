const mysql=require('mysql2');
let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"28469",
    database:"form"
});
module.exports=connection;