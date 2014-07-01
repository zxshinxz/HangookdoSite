// Auto-restart Nodejs server a few times so a random error doesn't kill everything
 
var forever = require('forever-monitor');
 
// set up airbrake for notifications when the server dies
var airbrake = require('airbrake').createClient("CLIENT_ID");
 
var server = new (forever.Monitor)('app.js', {
	max: 5,
	silent: false,
	options: []
});
 
server.on('exit', function () {
	console.log("server.js fully down after 5 starts.");
	console.log("SERVER DOWN.");
	airbrake.notify(new Error("SERVER DOWN: Forever restarts exhausted"), function(err, url) {
		// Throw an error if Airbrake delivery failed - server is dead anyway
		if (err) throw err;
 
		// Error has been delivered, url links to the error in airbrake
		console.log("Airbrake: Notified service:", url);
	});
});
 
server.on('exit:code', function(code) {
	console.log("server.js exited.");
});
 
server.start();