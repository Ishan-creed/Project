var mysqlConnection = require('./sql');
var express = require('express');
var bodyParser = require('body-parser');
const Connection = require('mysql/lib/Connection');
const { CLIENT_IGNORE_SPACE } = require('mysql/lib/protocol/constants/client');

var app = express();
app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({extended: false});

   app.get("/", function(req,res){
    res.sendFile(__dirname + '/Project/VenueBooking.html');
   });
   
   app.post('/', urlencodedParser ,function(req,res){
    var Name = req.body.Name;
    var Email = req.body.Email;
    var Number = req.body.Number;
    var Venue = req.body.Venue;
    var Date_Time = req.body.Date_Time;
    var Purpose = req.body.Purpose;
    mysqlConnection.connect(function(error){
        
        var sql2 = "Inserting into details(Name,Email,Number,Venue,Date_Time,Purpose) VALUES(?,?,?,?,?,?)";  
        
        mysqlConnection.query(sql2,[[Name,Email,Number,Venue,Date_Time,Purpose]],function(error,results){
           mysqlConnection.on('error', function(err) {
             });
            console.log('Data has been recorded! '+results.insertId);
            console.log('Data Inserted!')
            Connection.query(sql2);
            
        });
        
    });
    res.send('You will be informed  by the admin soon');
});
   
app.listen(3000);

console.log('Server Running..');