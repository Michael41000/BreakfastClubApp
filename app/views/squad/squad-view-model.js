var config = require("../../config");
var Observable = require("data/observable").Observable;
var firebase = require("nativescript-plugin-firebase");

function Squad(info) {
	info = info || {};

	// You can add properties to observables on creation
	var viewModel = new Observable({
		squadKey: info.squadKey || "",
		squadName: info.squadName || "",
		captain: info.captain || "",
		squadDesc: info.squadDesc || "",
		photo: info.photo || "",
		member: info.member || ""
	});

	viewModel.create = function() {
		firebase.push("/Squad", {
			'squadName': viewModel.get("squadName"),
			'captain': viewModel.get("captain"),
			'squadDesc': viewModel.get("squadDesc"),
			//'photo': viewModel.get("photo"),
			'member': viewModel.get("member")
		}).then(
			function (result) {
				console.log("Key: " + result.key);
				viewModel.squadKey = result.key;
				user.squadKey = result.key;
				console.log("Result key: " + result.key);
				console.log("User SquadKey Set: " + user.squadKey);
				user.setUser();
			},
			function (error) {
				console.log("Error: " + error);
			}
		);
	};

	viewModel.addValueEventListener = function() {
		console.log("User SquadKey: " + user.squadKey);
		var path = "/Squad/" + user.squadKey;
		var onValueEvent = function(result) {
			if (result.error) 
			{
				console.log("Listener error");
			}
			else
			{
				console.log("Listener: " + JSON.stringify(result));	
			}
		}
		firebase.addValueEventListener(onValueEvent, path).then(
			function(result) {
				console.log("Listener Added");
			},
			function(error) {
				console.log("Listener Not Added");
			}
		);
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
