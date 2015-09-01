// User Interface module and text with json data display
var data = require("data");
var api = require("api");

var deviceOS = Ti.Platform.osname;
console.log(deviceOS);

// Homescreen function
var homeScreen = function(){
	var mainWin = Ti.UI.createWindow({
		backgroundImage: "images/tire-tracks.png",
		top: 20,
		height: "100%",
		width: "100%",	
		layout: "vertical"
	});
	
	mainWin.addEventListener("open", function(){
		var sound = Ti.Media.createSound({
			url: "sounds/Engine_revving.wav",
			volume: 0.2
		});
		sound.play();
	});

	var logo = Ti.UI.createImageView({
		opacity: .9,
		image: "images/repair_icon.jpeg",
		width: "100%",
		height: "auto",
		top: 0
	});
	
	var titleLabel = Ti.UI.createLabel({
		text: "Car-U-Repair-It",
		color: "black",
		top: "3%",
		left: "5%",
		font: {fontSize: 26, fontWeight: "bold"}
	});
	
	var desc = Ti.UI.createLabel({
		text: "...find a local repair shop",
		color: "black",
		bottom: "1%",
		right: "3%",
		font: {fontSize: 20, fontWeight: "bold"}
	});

	// Home screen menu	
	var findWindow = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .9,
		top: "8%",
		height: "8%",
		left: "4%",
		right: "3%",
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "black"
	});
	
	var findButton = Ti.UI.createLabel({
		text: "Find a repair center",
		color: "white",
		top: "25%",
		width: "auto",
		height: "auto",
		font: {fontSize: 20, fontWeight: "bold"}
	});
	
	var savedWindow = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .9,
		top: "6%",
		height: "8%",
		left: "4%",
		right: "3%",
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "black"
	});
	
	var savedButton = Ti.UI.createLabel({
		text: "View saved Repair Centers",
		color: "white",
		top: "25%",
		width: "auto",
		height: "auto",
		font: {fontSize: 20, fontWeight: "bold"}
	});
	
	var eraseWindow = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .9,
		top: "6%",
		height: "8%",
		left: "4%",
		right: "3%",
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "black"
	});

	var eraseButton = Ti.UI.createLabel({
		text: "Erase saved Repair Centers",
		color: "white",
		top: "25%",
		width: "auto",
		height: "auto",
		font: {fontSize: 20, fontWeight: "bold"}
	});
	
	if(deviceOS === "android"){
		Ti.Geolocation.purpose = "Your location is needed to gather local Repair Shops";
	};
	
	mainWin.add(logo);
	logo.add(titleLabel);
	logo.add(desc);
	mainWin.add(findButton);
	mainWin.add(savedButton);
	mainWin.add(eraseButton);
	findButton.add(findLabel);
	savedButton.add(savedLabel);
	eraseButton.add(eraseLabel);
	mainWin.open();

	// Eventlisteners
	findWindow.addEventListener("click", finder.bg);
	/*
	var savedShops = require("savedShops");
	savedButton.addEventListener("click", savedShops);
	
	var eraseShops = require("eraseShops");
	eraseButton.addEventListener("click", eraseShops);*/		

};
	
// Export screen/display functions
exports.homeScreen = homeScreen;