var config = require("../../config");
var Observable = require("data/observable").Observable;
var firebase = require("nativescript-plugin-firebase");

function Breakfast(info) {
	info = info || {};

	// You can add properties to observables on creation
	var viewModel = new Observable({
		name: info.name || "",
		image: info.image || "",
		description: info.description || "",
		moderators: info.moderators || "",
		startHour: info.startTime || 0,
		startMinute: info.startMinute || 0
	});

	viewModel.createBreakfast = function() {
		firebase.setValue("/Breakfasts/Test", {
			'name': viewModel.get("name"),
			//'image': viewModel.get("image"),
			'description': viewModel.get("description"),
			'moderators': viewModel.get("moderators"),
			'startHour': viewModel.get("startHour"),
			'startMinute': viewModel.get("startMinute")
		});
	};

	return viewModel;
}


module.exports = Breakfast;
