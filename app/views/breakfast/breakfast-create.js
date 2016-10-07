var page;
var frameModule = require("ui/frame");

exports.switchView = function() {
	console.log("switchView");
	frameModule.topmost().navigate("/views/switch/switch-view");
}


exports.loaded = function(args){
	page = args.object;
};
