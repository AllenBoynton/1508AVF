// app launches
// check for network
// authenticate our app with ArrowDB
// grab api data (create custom data object)
// save custom data object locally
// save custom data object cloud
// read local data (create custom data object)
// populate UI from custom data object

// Set background and bootstrap file
Titanium.UI.setBackgroundColor("#000");

if(Ti.Network.online){
	var arrowDB = require("arrowDB");
	arrowDB.authenticate();
} else {
	alert("Please verify Network settings");
	var data = require("data");
	data.read();
};