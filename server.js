var express = require('express');
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'https://www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
connection.connect();
var app = express();

app.set('view engine', 'ejs');

app.get('/Home', function (req, res){
    connection.query('SELECT * FROM student')
    

});