// app launches
// check for network
// login to cloud
// grab api data (create custom data object)
// save custome data object locally
// save custom data object cloud
// read local data
// populate UI from local data

var ui = require("ui");

if(Ti.Network.online){
	var cloud = require("cloud");
	cloud.loginCloud();
} else {
	alert("Please verify Network in Settings");
	var data = require("data");
	data.read();
};
