//var listViewModule = require("nativescript-telerik-ui/listview");
//var drawerModule = require("nativescript-telerik-ui/sidedrawer");

var UserViewModel = require("./views/login/user-view-model");
var firebase = require("nativescript-plugin-firebase");
var application = require("application");

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

global.user = new UserViewModel();



//application.start({ moduleName: "views/login/login-page" });
//application.start({ moduleName: "views/profile/profile-create" });
application.start({ moduleName: "views/switch/switch-view" });
