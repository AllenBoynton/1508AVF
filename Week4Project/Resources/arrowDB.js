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

var save = function(shopArray){
	for (i=0, j = shopArray.length; i<j; i++){
		Cloud.Objects.create({
			repairShop: "repairShops",
			fields: {
				name: 	  shopArray[i].name,
				address:  shopArray[i].address,
				distance: shopArray[i].distance,
				make: 	  shopArray[i].make.name,
				repairs:  shopArray[i].type,
				hours: 	  shopArray[i].operations,
			}
		}, function(e){
			if(e.success){
				console.log("Cloud saved!");
			} else {
				alert("Data not saved!");
			}		
		});
	}
};
// Export local storage functions
exports.authenticate = authenticate;
exports.save = save;
