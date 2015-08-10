// This function creates the page layout and data presented on the screen that references the API	
var showData = function(json) {
	
	var win = Ti.UI.createWindow({
		backgroundColor: "#ccc",
		layout: "vertical"
	});
	
	var labelFormat = {
		color: "black",
		backgroundColor: "#ccc",
		borderColor: "black",
		font: {fontSize: 12, fontFamily: "Roboto"}
	};
	
	var bg = Ti.UI.createView({
		backgroundColor: "#dff5fb",
		top: 60,
		left: 20,
		right: 20,
		bottom: 170,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "black"
	});
	
	var icon = Ti.UI.createImageView({
		image: json.current_observation.icon_url,
		top: 150
	});
	
	var location = Ti.UI.createLabel(labelFormat);
		location.top = 30;
		location.font = {fontSize: 20, fontWeight: "bold", fontFamily: "Roboto"};
		location.text = json.current_location.display_location.full;
		
	var weather = Ti.UI.createLabel(labelFormat);
		weather.top = 200;
		weather.font = {fontSize: 15, fontFamily: "Roboto"};
		weather.text = json.current_observation.weather + " is the current weather.";
		
	var temp = Ti.UI.createLabel(labelFormat);
		weather.top = location.top + 60;
		weather.font = {fontSize: 42, fontWeight: "bold", fontFamily: "Roboto"};
		weather.text = json.current_observation.temp_f + " F";
		
	var feels = Ti.UI.createLabel(labelFormat);
		feels.top = 260;
		feels.left = 20;
		feels.text = "Feels Like " + json.current_observation.feelslike_f + "F";
		
	var humidity = Ti.UI.createLabel(labelFormat);
		humidity.top = 275;
		humidity.left = 20;
		humidity.text = "Humidity: " + json.observation_location.relative_humidity;
		
	var uvIndex = Ti.UI.createLabel(labelFormat);
		uvIndex.top = 40;
		uvIndex.left = 20;
		uvIndex.text = "UV Index: " + json.current_observation.UV;
	
	var windDir = Ti.UI.createLabel(labelFormat);
		windDir.top = 275;
		windDir.right = 20;
		windDir.text = "Wind direction: " + json.current_observation.wind_dir;
	
	var windSpeed = Ti.UI.createLabel(labelFormat);
		windSpeed.top = 260;
		windSpeed.right = 20;
		windSpeed.text = "Wind speed: " + json.current_observation.wind_mph + " mph";
	
	var update = Ti.UI.createLabel(labelFormat);
		update.bottom = 5;
		update.right = 20;
		update.color = "red";
		update.font = {fontSize: 10};
		update.text = json.current_observation.observation_time;
		
	win.add(bg);
	bg.add(icon);
	bg.add(location);
	bg.add(weather);
	bg.add(temp);
	bg.add(feels);
	bg.add(humidity);
	bg.add(uvIndex);
	bg.add(windDir);
	bg.add(windSpeed);
	bg.add(update);
	win.open();
};

exports.showData = showData;