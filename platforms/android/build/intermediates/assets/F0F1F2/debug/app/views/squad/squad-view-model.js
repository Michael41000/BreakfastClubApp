var config = require("../../config");
var Observable = require("data/observable").Observable;
var firebase = require("nativescript-plugin-firebase");

function Squad(info) {
	info = info || {};

	// You can add properties to observables on creation
	var viewModel = new Observable({
		squadname: info.name || "",
		captain: info.captain || "",
		description: info.name || "",
		photo: info.photo || "",
		members: info.members || []
	});

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
