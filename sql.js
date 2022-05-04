const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '12345',
database: 'sys'

});

mysqlConnection.connect(function(error) {
console.log('connected as id ' + connection.threadId);
var sql2 = "CREATE TABLE book_venue (Name VARCHAR(255),Email VARCHAR(255),Number INT,Venue VARCHAR(255),Date_Time DATETIME(6),Purpose VARCHAR(255))";
mysqlConnection.query(sql2,function(error,result){
console.log('Table Created!');
});

 });
module.exports = mysqlConnection;