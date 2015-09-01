var splashScreen = function(){
	var splashWin = Ti.UI.createWindow({
		backgroundColor: "black",	
	});
	
	var splashText = Ti.UI.createLabel({
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		text: "Car-U-Repair-It",
		font: {fontSize: 32, fontWeight: "bold"}
	});
	
	if(Ti.Platform.osname != "android"){
		splashText.color = "white";
	};
	
	splashWin.add(splashText);
	splashWin.open();
	
	splashWin.addEventListener("close", function(){
		var ui = require("ui");
		ui.homeScreen();
	});
	
	setTimeout(function(){
		splashWin.close();
	},	3000);
};

exports.splashScreen = splashScreen;
