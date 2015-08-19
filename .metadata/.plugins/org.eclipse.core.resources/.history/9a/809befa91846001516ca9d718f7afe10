// Function is collecting information for geolocation and local weather

var api = require("api");
var ui = require("ui");

var getGeo = function(e){
	Ti.Geolocation.purpose = "Current location is needed to get your local weather.";
	Ti.Geolocation.getCurrentPosition(function(e) {
		if(Ti.Platform.osname === "android") {
			var latitude = 34.8621210;
			var longitude = -82.3539020;
			api.netCheck(latitude,longitude);
		} else {
			var latitude = e.coords.latitude;
			var longitude = e.coords.longitude;
			api.netCheck(latitude,longitude);
		};
	});
};

exports.getGeo = getGeo;