var frameModule = require("ui/frame");
var BreakfastViewModel = require("./breakfast-view-model");
var breakfast = new BreakfastViewModel();
var page;
var frameModule = require("ui/frame");

exports.switchView = function() {
	console.log("switchView");
	frameModule.topmost().navigate("/views/switch/switch-view");
}


exports.loaded = function(args){
	page = args.object;
	page.bindingContext = breakfast;
};

exports.create = function() {
	var tPicker = page.getViewById("startTime");
	breakfast.startHour = tPicker.hour;
	breakfast.startMinute = tPicker.minute;
	console.log("Hour: " + breakfast.startHour);
	console.log("Minute: " + breakfast.startMinute);
	breakfast.createBreakfast();
};

function goToSwitchView() {
	var topmost = frameModule.topmost();
	topmost.navigate("views/switch/switch-view");
}
