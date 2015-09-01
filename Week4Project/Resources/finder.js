var finder = function(data){	
	var bg = Ti.UI.createWindow({
		backgroundImage: "images/skidmarks.jpg",
		height: "auto",
		width: "auto"
	});
	
	var nameView = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .8,
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
		opacity: .8,
		top: nameView.top + nameView.height + 30,
		height: 250,
		left: 40,
		right: 40,
		borderRadius: 8
	});
	
	var hoursView = Ti.UI.createView({
		backgroundColor: "gray",
		opacity: .8,
		top: infoView.top + infoView.height + 30,
		height: 100,
		left: 40,
		right: 40,
		borderRadius: 8
	});
	
	var favButton = Ti.UI.createButton({
		backgroundColor: "gray",
		opacity: .8,
		bottom: 20,
		height: 50,
		left: 40,
		right: 40,
		borderRadius: 8,		
		text: "FAVORITES",		
	});
		
	var name = Ti.UI.createLabel({
		color: "white", 
		top: 3,
		text: "name",
		textAlign: "center",
		font: {fontSize: 32, fontWeight: "bold"}
	});	
	
	var address = Ti.UI.createLabel({
		color: "white", 
		top: 20,
		text: "address",
		font: {fontSize: 22, fontWeight: "bold"}
	});	
	
	var distance = Ti.UI.createLabel({
		color: "white", 
		top: address.top + 50,
		left: 20,
		text: "distance",
		font: {fontSize: 18, fontWeight: "bold"}
	});	
	
	var make = Ti.UI.createLabel({
		color: "white", 
		top: distance.top + 50,
		left: 20,
		text: "make",
		font: {fontSize: 18, fontWeight: "bold"}
	});	
	
	var repairs = Ti.UI.createLabel({
		color: "white", 
		top: make.top + 50,
		left: 20,
		text: "repairs",
		font: {fontSize: 18, fontWeight: "bold"}
	});	
	
	var hours = Ti.UI.createLabel({
		color: "white", 
		top: 20,
		left: 20,
		text: "hours"
	});
	
	// Function to display the data on the UI
	var addText = function(repairShop){
		name 	 = repairShop.name;
		address  = repairShop.address;
		distance = "Distance from here: " + repairShop.distance + " mi";
		make 	 = "We specialize in repairs of mostly " + repairShop.make + "s. \n but repair most all foreign and domestic.";
		repairs  = "Type of work performed as a " + repairShop.repairs + ".";
		hours 	 = "Hours of Operation: " + repairShop.hours;	
	};
	
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

exports.finder = finder;