// Allen Boynton
// AVF 1508
// Week 2 Project : Storage/SQLite
// August 16, 2015

// Set background
Titanium.UI.setBackgroundColor("#000");

var win = Ti.UI.createWindow({
	backgroundColor: "gray",
	layout: "vertical"
});

var ui = require("ui");
var api = require("api");
var geo = require("geo");
var storage = require("storage");

win.open();
