// This function creates the page layout and data presented on the screen that references the API	

// var app = require("app");

// Function to adjust text within the separate labels
var text = function(data) {
	location.text 	= data.current_observation.display_location.full;
	time.text 		= data.current_observation.local_time_rfc822;
	temp.text 		= data.current_observation.temp_f + " F";
	highLow.text 	= data.almanac.temp_high.normal.F + " F / " + data.almanac.temp_low.normal.F + " F";
	weather.text 	= data.current_observation.weather;
	feels.text 		= "Feels like " + data.current_observation.feelslike_f + " F";
	recordHigh.text = "Record High: " + data.almanac.temp_high.record.F + " F, in: " + data.almanac.temp_high.recordyear;
	recordLow.text 	= "Record Low: " + data.almanac.temp_low.record.F + " F, in : " + data.almanac.temp_low.recordyear;
	wind.text 		= "Wind: " + data.current_observation.wind_mph + " mph " + data.current_observation.wind_dir;
	humidity.text 	= "Humidity: " + data.current_observation.relative_humidity;
	uv.text 		= "UV index: " + data.current_observation.UV;
	dewPoint.text 	= "Dew point: " + data.current_observation.dewpoint_f + " F";
	pressure.text 	= "Pressure: " + data.current_observation.pressure_mb + " mB-";
	visibility.text = "Visibility: " + data.current_observation.visibility_mi + " mi";
	updateInfo.text = data.current_observation.observation_time;
};

var win = Ti.UI.createWindow({
	backgroundColor: "gray",
	layout: "vertical"
});

var labelFormat = {
	left: 20,
	color: "white",
	font: {fontSize: 16, fontWeight: "bold", fontFamily: "Roboto"}
};

var bg = Ti.UI.createView({
	backgroundImage: "images/170.jpg",
	top: 20,
	height: "100%",
	width: "100%"
});

var location = Ti.UI.createLabel(labelFormat);
	location.top = 10;
	location.text = "location";
	
var time = Ti.UI.createLabel(labelFormat);
	time.top = location.top + 20;
	time.font = {fontSize: 12, fontWeight: "bold", fontFamily: "Roboto"};
	time.text = "time";
	
var temp = Ti.UI.createLabel(labelFormat);
	temp.top = location.top + 70;
	temp.font = {fontSize: 46};
	temp.text = "temp";
	
var highLow = Ti.UI.createLabel(labelFormat);
	highLow.top = location.top + 50;
	highLow.left = temp.left + 10;
	highLow.font = {fontSize: 12, fontWeight: "bold", fontFamily: "Roboto"};
	highLow.text = "highLow";
	
var weather = Ti.UI.createLabel(labelFormat);
	weather.top = temp.top + 70;
	weather.text = "weather";

var feels = Ti.UI.createLabel(labelFormat);
	feels.top = weather.top + 20;
	feels.text = "feels";
	
var recordHigh = Ti.UI.createLabel(labelFormat);
	recordHigh.top = feels.top + 20;
	recordHigh.text = "recordHigh";

var recordLow = Ti.UI.createLabel(labelFormat);
	recordLow.top = feels.top + 20;
	recordLow.left = sunrise.left + 10;
	recordLow.text = "recordLow";
	
var wind = Ti.UI.createLabel(labelFormat);
	wind.top = fullUrl.top + 20;
	wind.text = "wind";

var humidity = Ti.UI.createLabel(labelFormat);
	humidity.top = wind.top + 20;
	humidity.text = "humidity";
	
var uv = Ti.UI.createLabel(labelFormat);
	uv.top = humidity.top + 20;
	uv.text = "uv";
	
var dewPoint = Ti.UI.createLabel(labelFormat);
	dewPoint.top = fullUrl.top + 20;
	dewPoint.right = 20;
	dewPoint.text = "dewPoint";

var pressure = Ti.UI.createLabel(labelFormat);
	pressure.top = dewPoint.top + 20;
	pressure.right = 20;
	pressure.text = "pressure";
	
var visibility = Ti.UI.createLabel(labelFormat);
	visibility.top = pressure.top + 20;
	visibility.right = 20;
	visibility.text = "visibility";
	
var updateInfo = Ti.UI.createLabel(labelFormat);
	updateInfo.right = 20;
	updateInfo.bottom = 30;
	updateInfo.color = "yellow";
	updateInfo.textAlign = "center";
	updateInfo.text = "updateInfo";
	
win.add(bg);
bg.add(location);
bg.add(time);
bg.add(temp);
bg.add(highLow);
bg.add(weather);
bg.add(feels);
bg.add(recordHigh);
bg.add(recordLow);
bg.add(wind);	
bg.add(humidity);
bg.add(uv);	
bg.add(dewPoint);
bg.add(pressure);
bg.add(visibility);
bg.add(updateInfo);
win.open();

exports.checkData = checkData;