const mysql = require("mysql");

//mysql://b997872b53beea:2a43ebc9@us-cdbr-east-04.cleardb.com/heroku_8161b00dcfaf10f

const conexion = mysql.createConnection({
    host:"us-cdbr-east-04.cleardb.com",
    database:"heroku_8161b00dcfaf10f",
    user:"b997872b53beea",
    password:"2a43ebc9"
});

conexion.connect(function(error){
    if (error){
        throw error;
    } else {
        console.log("Conexion exitosa");
    }
});

conexion.end();