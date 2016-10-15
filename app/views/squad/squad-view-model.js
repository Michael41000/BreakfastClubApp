var config = require("../../config");
var Observable = require("data/observable").Observable;
var firebase = require("nativescript-plugin-firebase");

function Squad(info) {
	info = info || {};

	// You can add properties to observables on creation
	var viewModel = new Observable({
		squadName: info.name || "",
		captain: info.captain || "",
		squadDesc: info.squadDesc || "",
		photo: info.photo || "",
		member: info.member || ""
	});

	viewModel.create = function() {
		firebase.setValue("/Squad/Test", {
			'squadName': viewModel.get("squadName"),
			'captain': viewModel.get("captain"),
			'squadDesc': viewModel.get("squadDesc"),
			//'photo': viewModel.get("photo"),
			'member': viewModel.get("member")
		});
	};


	return viewModel;
}

function handleErrors(response) {
	if (!response.ok) {
		console.log(JSON.stringify(response));
		throw Error(response.statusText);
	}
	return response;
}

module.exports = Squad;
