// Function is collecting information for geolocation and local weather
var api = require("api");

var getGeo = function(){
	Ti.Geolocation.purpose = "Current location is needed to get your local weather.";
	Ti.Geolocation.getCurrentPosition(function(e){
		if(Ti.Platform.osname === "android") {
			var latitude = 34.8621210;
			var longitude = -82.3539020;
		} else {
			var latitude = e.coords.latitude;
			var longitude = e.coords.longitude;
		}
	});
};

win.addEventListener("swipe", function(e){
	if(e.direction == "down"){
		getGeo();
	};
});

exports.getGeo = getGeo;