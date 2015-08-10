// Function is collecting information for geolocation and local weather
var osname = Ti.Platform.osname;

var getGeo = function(){
	Ti.Geolocation.purpose = "Current location is needed to get your local weather.";
	Ti.Geolocation.getCurrentPosition = function(e) {
		if(osname === "android") {
			var latitude = e.coords.latitude;
			var longitude = e.coords.longitude;
			api.netCheck(latitude, longitude);
			alert("Network is currently unavailable.");
		} else {
			var latitude = 34.8621210;
			var longitude = -82.3539020;
			api.netCheck(latitude, longitude);
		};
	};	
};

exports.getGeo = getGeo;