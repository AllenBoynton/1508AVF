// Module to read function
var read = function(){
	var db = Ti.Database.open("weatherData");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTable (id INTEGER PRIMARY KEY, location TEXT, time TEXT, temp TEXT, highLow TEXT, tempLow TEXT, weather TEXT, feels TEXT, recordHigh TEXT, highYear TEXT, recordLow INTEGER, lowYear TEXT, wind TEXT, windDir TEXT, humidity TEXT, uv TEXT, dewPoint TEXT, pressure TEXT, visibility TEXT, updateInfo TEXT)");
	var dbResults = db.execute("Select * FROM weatherTable");
		while (dbResults.isValidRow()){
			var weather = {
				location:  	 dbResults.fieldByName ("location"),
				time:  		 dbResults.fieldByName ("time"),
				temp:		 dbResults.fieldByName ("temp"),
				highLow: 	 dbResults.fieldByName ("highLow"),
				tempLow:	 dbResults.fieldByName ("tempLow"),
				weather: 	 dbResults.fieldByName ("weather"),
				feels: 		 dbResults.fieldByName ("feels"),
				recordHigh:	 dbResults.fieldByName ("recordHigh"),
				highYear:	 dbResults.fieldByName ("highYear"),
				recordLow: 	 dbResults.fieldByName ("recordLow"),
				lowYear:	 dbResults.fieldByName ("lowYear"),
				wind: 		 dbResults.fieldByName ("wind"),
				windDir:	 dbResults.fieldByName ("windDir"),
				humidity: 	 dbResults.fieldByName ("humidity"),
				uv:		 dbResults.fieldByName ("uv"),
				dewPoint: 	 dbResults.fieldByName ("dewPoint"),
				pressure: 	 dbResults.fieldByName ("pressure"),
				visibility:	 dbResults.fieldByName ("visibility"),
				updateInfo:	 dbResults.fieldByName ("updateInfo"),
		};
		dbResults.next();
	}
	dbResults.close();
	db.close();
	ui.addText(weather);
};
// Function saves data to database
var saves = function(weatherInfo){
	var db = Ti.Database.open("weatherData");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTable (id INTEGER PRIMARY KEY, location TEXT, time TEXT, temp TEXT, highLow TEXT, tempLow TEXT, weather TEXT, feels TEXT, recordHigh TEXT, highYear TEXT, recordLow INTEGER, lowYear TEXT, wind TEXT, windDir TEXT, humidity TEXT, uv TEXT, dewPoint TEXT, pressure TEXT, visibility TEXT, updateInfo TEXT)");
	db.execute("DELETE FROM weatherTable");
	db.execute("INSERT INTO weatherTable (location, time, temp, highLow, tempLow, weather, feels, recordHigh, highYear, recordLow, lowYear, wind, windDir, humidity, uv, dewPoint, pressure, visibility, updateInfo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", weatherInfo.location, weatherInfo.time, weatherInfo.temp, weatherInfo.highLow, weatherInfo.tempLow, weatherInfo.weather, weatherInfo.feels, weatherInfo.recordHigh, weatherInfo.highYear, weatherInfo.recordLow, weatherInfo.lowYear, weatherInfo.wind, weatherInfo.windDir, weatherInfo.humidity, weatherInfo.uv, weatherInfo.dewPoint, weatherInfo.pressure, weatherInfo.visibility, weatherInfo.updateInfo);
    db.close();
    read();
};
// Exports
exports.saves = saves;
exports.read = read;
