const mysql = require("mysql");
const bodyParse = require("body-parse");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

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

app.get('/', (req,res)=>{
    res.send("Welcome");
});

conexion.end();