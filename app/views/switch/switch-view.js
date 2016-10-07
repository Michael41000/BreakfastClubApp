var frameModule = require("ui/frame");

exports.switchView = function() {
	console.log("switchView");
	frameModule.topmost().navigate("/views/switch/switch-view");
}

exports.login = function() {
	console.log("Login");
	frameModule.topmost().navigate("/views/login/login-page");
}

exports.brkfstCreate = function() {
	console.log("BrkfstCreate in production");
	//frameModule.topmost().navigate("/views/breakfast/breakfast-create");
}

exports.brkfstFeed = function() {
	console.log("BrkfstFeed in production");
	//frameModule.topmost().navigate("/views/breakfast/breakfast-feed");
}

exports.cameraPhoto = function() {
	console.log("CameraPhoto in production");
	//frameModule.topmost().navigate("/views/camera/camera-photo");
}

exports.squadCreate = function() {
	console.log("SquadCreate");
	frameModule.topmost().navigate("/views/squad/squad-create");
}

exports.squadMain = function() {
	console.log("SquadMain");
	frameModule.topmost().navigate("/views/squad/squad-main");
}

exports.squadMsg = function() {
	console.log("SquadMsg");
	frameModule.topmost().navigate("/views/squad/squad-msg");
}