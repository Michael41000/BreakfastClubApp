var frameModule = require("ui/frame");

exports.switchView = function() {
	console.log("switchView");
	frameModule.topmost().navigate("/views/switch/switch-view");
}