const mysql = require("mysql");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.set('port', (process.env.PORT || 8080))
//mysql://b997872b53beea:2a43ebc9@us-cdbr-east-04.cleardb.com/heroku_8161b00dcfaf10f

const conexion = mysql.createConnection({
    //timeout:3000,
    host:"us-cdbr-east-04.cleardb.com",
    database:"heroku_8161b00dcfaf10f",
    user:"b997872b53beea",
    password:"2a43ebc9"
});

conexion.connect();
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

app.get('/h', (req,res)=>{
    res.send("Welcome");
});

app.get('/hola', (req,res)=>{
    res.send("holas");
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM productos';
    

    conexion.query(sql, (err, result,fields)=>{
        if (err){
            console.log('errores: ' + err);
            throw err;
        }
        //res.send(result)
        res.json(result);
        
    });
    
});

app.post('/p', (request, response) => {
    console.log(request.body);
    conexion.query('INSERT INTO productos SET ?', request.body.json, (err, result) => {
        if (err) {
            console.log('error: ' + err);
            //throw err;
        }
        //response.status(201).send(`Producto added with ID: ${result.insertId}`);
        response.send("ok");
    });
});



