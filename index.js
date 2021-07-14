const mysql = require("mysql");

const conexion = mysql.createConnection({
    host:"",
    database:"",
    user:"",
    password:""
});

conexion.connect(function(error){
    if (error){
        throw error;
    } else {
        console.log("Conexion exitosa");
    }
});

conexion.end();