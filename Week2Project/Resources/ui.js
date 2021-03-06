// This function creates the page layout and data presented on the screen that references the API	
var win = Ti.UI.createWindow({
	backgroundColor: "gray",
	layout: "vertical"
});

var labelFormat = {
	color: "white",
	left: 20,
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
	temp.top = location.top + 60;
	temp.font = {fontSize: 46};
	temp.text = "temp";
	
var highLow = Ti.UI.createLabel(labelFormat);
	highLow.top = location.top + 85;
	highLow.left = temp.left + 140;
	highLow.text = "highLow";
		
var weather = Ti.UI.createLabel(labelFormat);
	weather.top = temp.top + 80;
	weather.text = "weather";
	
var feels = Ti.UI.createLabel(labelFormat);
	feels.top = weather.top + 20;
	feels.text = "feels";
	
var recordHigh = Ti.UI.createLabel(labelFormat);
	recordHigh.top = feels.top + 50;
	recordHigh.text = "recordHigh";
	
var recordLow = Ti.UI.createLabel(labelFormat);
	recordLow.top = recordHigh.top + 20;
	recordLow.text = "recordLow";
		
var wind = Ti.UI.createLabel(labelFormat);
	wind.top = recordLow.top + 150;
	wind.text = "wind";
	
var humidity = Ti.UI.createLabel(labelFormat);
	humidity.top = wind.top + 20;
	humidity.text = "humidity";
	
var uv = Ti.UI.createLabel(labelFormat);
	uv.top = humidity.top + 20;
	uv.text = "uv";
	
var dewPoint = Ti.UI.createLabel(labelFormat);
	dewPoint.top = recordLow.top + 150;
	dewPoint.left = null;
	dewPoint.right = 20;
	dewPoint.text = "dewPoint";
	
var pressure = Ti.UI.createLabel(labelFormat);
	pressure.top = dewPoint.top + 20;
	pressure.left = null;
	pressure.right = 20;
	pressure.text = "pressure";
	
var visibility = Ti.UI.createLabel(labelFormat);
	visibility.top = pressure.top + 20;
	visibility.left = null;
	visibility.right = 20;
	visibility.text = "visibility";
	
var updateInfo = Ti.UI.createLabel(labelFormat);
	updateInfo.textAlign = "center";
	updateInfo.right = 20;
	updateInfo.bottom = 25;
	updateInfo.color = "yellow";
	updateInfo.text = "updateInfo";

// Function to add the json data text to each label
var addText = function(dataBackup){
		location.text 	= dataBackup.location;
		time.text 	= dataBackup.time;
		temp.text 	= dataBackup.temp + " F";
		highLow.text 	= dataBackup.highLow + " F / " + dataBackup.tempLow + " F";
		weather.text 	= dataBackup.weather;
		feels.text 	= "Feels like " + dataBackup.feels + " F";
		recordHigh.text = "Record High: " + dataBackup.recordHigh + " F in " + dataBackup.highYear;
		recordLow.text 	= "Record Low: " + dataBackup.recordHigh + " F in " + dataBackup.lowYear;
		wind.text 	= dataBackup.wind + " mph " + dataBackup.windDir;
		humidity.text 	= "Humidity: " + dataBackup.humidity;
		uv.text 	= "UV index: " + dataBackup.uv;
		dewPoint.text 	= "Dew point: " + dataBackup.dewPoint + " F";
		pressure.text 	= "Pressure: " + dataBackup.pressure + " mB-";
		visibility.text = "Visibility: " + dataBackup.visibility + " mi";
		updateInfo.text = dataBackup.updateInfo;
};

// Main code		
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

exports.addText = addText;
