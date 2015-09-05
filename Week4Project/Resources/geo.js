// Gets geolocation
var api = require("api");

var zip = function(findMe){
    console.log(findMe);
};

var getGeo = function(){
	Ti.Geolocation.purpose = "This application requires your Current Location.";
	Ti.Geolocation.getCurrentPosition(function(e){
		if(Ti.Platform.osname =="android"){
			var latitude = 34.8621210;
			var longitude = -82.3539020;
			api.network(latitude, longitude);
		} else {
			var latitude = e.coords.latitude;
			var longitude = e.coords.longitude;
			api.network(latitude, longitude);
		}
	});
	Ti.Geolocation.reverseGeocoder(latitude, longitude, zip);
};

// Exports geolocation function 
exports.getGeo = getGeo;
exports.zip = zip;