var app = require('./app')
function validatelogin(){
    var email = document.getElementById("EmailInput").value;
    var password = document.getElementById("EmailInput").value;
    if(email != "ishan@123" || password != "12345678"){
        alert("Login Failed");
    }
    else{
        location.href = "./VenueBooking.html";
    }
    
}