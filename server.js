var express = require('express');
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
connection.connect();
var app = express();

app.set('view engine', 'ejs');

app.get('/home', function (req, res){
    connection.query('SELECT * FROM student', function (error, results, fields) {
        console.log('DATA'+results);
        res.render('pages/home',{home : results})
      });
});

console.log('App is running at http://localhost:8080');

app.listen(8080);