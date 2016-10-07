var frameModule = require("ui/frame");
var BreakfastViewModel = require("./breakfast-view-model");
var breakfast = new BreakfastViewModel();
var page;

exports.loaded = function(args) {
	page = args.object;
	page.bindingContext = breakfast;
};

exports.create = function() {
	var tPicker = page.getViewById("startTime");
	breakfast.hour = tPicker.hour;
	breakfast.minute = tPicker.minute;
	breakfast.createBreakfast();
};

