// getGeo function file using api.js file

var loadFile = require("api");

var geoGet = function() {
	Ti.Geolocation.purpose = "Your location is required to run this application.";
	Ti.Geolocation.getCurrentPosition(function(e) {
		if(Ti.Platform.osname == "android") {
			var latitude = 34.8621210;
			var longitude = -82.3539020;
			api.netCheck(latitude, longitude);
		} else {
			var latitude = e.coords.latitude;
			var longitude = e.coords.longitude;
			api.netCheck(latitude, longitude);
		};
	});
};

exports.geoGet = geoGet;