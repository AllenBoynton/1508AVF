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
		
	};
	
	mainWin.add(logo);
	mainWin.add(menuWindow);
	menuWindow.add(findButton);
	menuWindow.add(savedButton);
	menuWindow.add(eraseButton);
	mainWin.openWindow(menuWindow);
	
	// Eventlisteners
	findButton.addEventListener("click", finder);
	
};	

// Function to display the data on the UI
var addText = function(dataBackup){
		name.text 	  = dataBackup.name;
		address.text  = dataBackup.address;
		distance.text = "Distance from here: " + dataBackup.distance + " mi";
		make.text 	  = "We specialize in repairs of mostly " + dataBackup.make + "s. \n but repair most all foreign and domestic.";
		repairs.text  = "Type of work performed as a " + dataBackup.repairs + ".";
		hours.text 	  = "Hours of Operation: " + dataBackup.hours;	
};	

// Results screen with options
var finder = function(){	
	var bg = Ti.UI.createWindow({
		backgroundImage: "images/skidmarks.jpg",
		height: "auto",
		width: "auto"
	});
	
	var nameView = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .7,
		top: 20,
		height: 50,
		left: 40,
		right: 40,
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "black"
	});
	
	var infoView = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .7,
		top: nameView.top + nameView.height + 30,
		height: 250,
		left: 40,
		right: 40,
		borderRadius: 8
	});
	
	var hoursView = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .7,
		top: infoView.top + infoView.height + 30,
		height: 100,
		left: 40,
		right: 40,
		borderRadius: 8
	});
	
	var favButton = Ti.UI.createButton({
		backgroundColor: "gray",
		opacity: .7,
		bottom: 20,
		height: 50,
		left: 40,
		right: 40,
		borderRadius: 8,		
		text: "FAVORITES",		
	});
		
	var name = Ti.UI.createLabel(/*labelFormat*/{
		color: "white", 
		top: 3,
		text: "name",
		textAlign: "center",
		font: {fontSize: 32, fontWeight: "bold"}
	});	
	
	var address = Ti.UI.createLabel(/*labelFormat*/{
		color: "white", 
		top: 20,
		text: "address",
		font: {fontSize: 22, fontWeight: "bold"}
	});	
	
	var distance = Ti.UI.createLabel(/*labelFormat*/{
		color: "white", 
		top: address.top + 50,
		left: 20,
		text: "distance",
		font: {fontSize: 18, fontWeight: "bold"}
	});	
	
	var make = Ti.UI.createLabel(/*labelFormat*/{
		color: "white", 
		top: distance.top + 50,
		left: 20,
		text: "make",
		font: {fontSize: 18, fontWeight: "bold"}
	});	
	
	var repairs = Ti.UI.createLabel(/*labelFormat*/{
		color: "white", 
		top: make.top + 50,
		left: 20,
		text: "repairs",
		font: {fontSize: 18, fontWeight: "bold"}
	});	
	
	var hours = Ti.UI.createLabel(/*labelFormat*/{
		color: "white", 
		top: 20,
		left: 20,
		text: "hours"
	});	
	
	// Main code
	bg.add(nameView);
	bg.add(infoView);
	bg.add(hoursView);
	bg.add(favButton);
	nameView.add(name);
	infoView.add(address);
	infoView.add(distance);
	infoView.add(make);
	infoView.add(repairs);
	hoursView.add(hours);
	mainWin.openWindow(bg);
	mainWin.open();
	
};

// Export screen/display functions
exports.homeScreen = homeScreen;
exports.addtext = addText;
exports.finder = finder;
