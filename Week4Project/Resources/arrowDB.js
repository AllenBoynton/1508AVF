var Cloud = require("ti.cloud");
Cloud.debug = true;

var authenticate = function(){
	
	Cloud.Users.login({
	    login: "admin",
	    password: "12345"
	}, function (e) {
		console.log(e);
	    if (e.success) {
	        var api = require("api");
	        api.getData();
	    } else {
	        alert("Error: " + e.message);
	    }
	});
};

var save = function(dbArray){
	for (i=0, j = dbArray.length; i<j; i++){
		Cloud.Objects.create({
			repairShop: "repairShops",
			fields: {
				name: 	  dbArray[i].name,
				address:  dbArray[i].address,
				distance: dbArray[i].distance,
				make: 	  dbArray[i].make.name,
				repairs:  dbArray[i].type,
				hours: 	  dbArray[i].operations,
			};
		});
	};
// Export local storage functions
exports.authenticate = authenticate;
exports.save = save;
