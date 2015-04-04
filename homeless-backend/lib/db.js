var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

module.exports.mongoose = mongoose; 
module.exports.Schema = Schema; 

var username="db"
var password="lachacks" 
var address = 'localhost/homeless'; 
connect(); 

// Connect to DB 
function connect() { 
	var url = 'mongodb://localhost/homeless'; 
	mongoose.connect(url); 
}
function disconnect() {mongoose.disconnect()} 


