var firebase = require("nativescript-plugin-firebase");

firebase.init({
	  // Optionally pass in properties for database, authentication and cloud messaging,
	  // see their respective docs.
}).then(
    function (instance) {
		console.log("firebase.init done");
	},
	function (error) {
		console.log("firebase.init error: " + error);
	}
);

var application = require("application");
//application.start({ moduleName: "login-page" });
application.start({ moduleName: "breakfast-feed" });
