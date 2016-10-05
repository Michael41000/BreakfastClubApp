var firebase = require("nativescript-plugin-firebase");
//var listViewModule = require("nativescript-telerik-ui/listview");
//var drawerModule = require("nativescript-telerik-ui/sidedrawer");

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
//application.start({ moduleName: "views/login/login-page" });
application.start({ moduleName: "views/squad/squad-create" });
