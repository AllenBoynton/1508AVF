// User Interface module and text with json data display
var app = require("app");
var arrowDB = require("arrowDB");
var geo = require("geo");
var api = require("api");
var data = require("data");

// Universal variables
var screenWidth = Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;
var deviceOS = Ti.Platform.osname;
console.log(deviceOS);

var mainWin = Ti.UI.createWindow({
	backgroundImage: "images/tire-tracks.png",
	title: "Car-U-Repair-It",
	color: "yellow",
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

mainWin.open();

// Homescreen function
var homeScreen = function(){
	// Home screen menu	
	var menuWindow = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .7,
		top: "25%",
		height: "60%",
		left: "5%",
		right: "5%",
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "black"
	});

	var logo = Ti.UI.createImageView({
		backgroungColor: "#000",
		image: "images/repair_icon.jpeg",
		width: "auto",
		height: "auto",
		top: "10%"
	});
	if(deviceOS === "android"){
		logo.width  = "100%";
		logo.height = "25%";
	};
		
	var findButton = Ti.UI.createButton({
		text: "Find a repair center",
		color: "black",
		top: "50%",
		left: "5%",
		width: "auto",
		height: "auto"
	});
	
	var savedButton = Ti.UI.createButton({
		text: "View saved Repair Centers",
		color: "black",
		top: "60%",
		left: "5%",
		width: "auto",
		height: "auto"
	});
	
	var eraseButton = Ti.UI.createButton({
		text: "Erase saved Repair Centers",
		color: "black",
		top: "70%",
		left: "5%",
		width: "auto",
		height: "auto"
	});
	
	if(deviceOS === "android"){
		Ti.Geolocation.purpose = "Your location is needed to gather local Repair Shops";
	};
	
	if(Ti.Geolocation.hasCompass){
		var compassLabel = Ti.UI.createLabel({
			text: "Compass",
			color: "black",
			top: "65%",
			right: "5%",
			width: "auto",
			height: "auto"
		});
		mainWin.add(compassLabel);
		
		var compass = require("compass");
		compassLabel.addEventListener("click", compass.openCompass);
	} else {
		var compassLabel = Ti.UI.createLabel({
			text: "Compass",
			color: "black",
			top: "65%",
			right: "5%",
			width: "auto",
			height: "auto"
		});
		mainWin.add(compassLabel);
		
	};
	
	mainWin.add(logo);
	mainWin.add(menuWindow);
	menuWindow.add(findButton);
	menuWindow.add(savedButton);
	menuWindow.add(eraseButton);
	mainWin.openWindow(menuWindow);
	mainWin.open();
	
	// Eventlisteners
	var finder = require("finder");
	findButton.addEventListener("click", finder);
	
	var savedShops = require("savedShops");
	savedButton.addEventListener("click", savedShops);
	
	var eraseShops = require("eraseShops");
	eraseButton.addEventListener("click", eraseShops);
	
};	

// Export screen/display functions
exports.homeScreen = homeScreen;
