var frameModule = require("ui/frame");

module.exports = {
	switchToLogin: function() {
		frameModule.topmost().navigate("views/login/login");
	},
	switchToBrkfstFeed: function() {
		frameModule.topmost().navigate("views/breakfast/breakfast-feed");
	},
	switchToCreateBrkfst: function() {
		frameModule.topmost().navigate("views/breakfast/breakfast-create");
	},
	switchToCameraPhoto: function() {
		frameModule.topmost().navigate("views/camera/camera-photo");
	},
	switchToSquadCreate: function() {
		frameModule.topmost().navigate("views/squad/squad-create");
	},
	switchToSquadMain: function() {
		frameModule.topmost().navigate("views/squad/squad-main");
	},
	switchToSquadMsg: function() {
		frameModule.topmost().navigate("views/squad/squad-msg");
	}
};