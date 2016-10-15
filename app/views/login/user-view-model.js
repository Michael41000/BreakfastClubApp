var config = require("../../config");
var Observable = require("data/observable").Observable;
var firebase = require("nativescript-plugin-firebase");

function User(info) {
	info = info || {};

	// You can add properties to observables on creation
	var viewModel = new Observable({
		uid: info.uid || "",
		name: info.name || "",
		email: info.email || "",
		profileImageURL: info.profileImageURL || ""

	});


	viewModel.login = function(callback) {
		firebase.login({
			type: firebase.LoginType.FACEBOOK,
			scope: ['public_profile', 'email' , 'user_friends'] // optional: defaults to ['public_profile', 'email']
		}).then(
			function (result) {
				console.log(JSON.stringify(result));
				var userJson = JSON.parse(JSON.stringify(result));
				//console.log(userJson.friends);
				viewModel.uid = userJson.uid;
				viewModel.name = userJson.name;
				viewModel.email = userJson.email;
				viewModel.profileImageURL = userJson.profileImageURL;
				firebase.setValue("/Users/" + viewModel.get("uid"), {
					'name': viewModel.get("name"),
					'email': viewModel.get("email"),
					'profileImageURL': viewModel.get("profileImageURL")

				});

				callback(true);
			},
			function (errorMessage) {
				console.log(errorMessage);
				callback(false);
			}
		)
	};

	viewModel.getCurrentUser = function () {
		firebase.getCurrentUser().then(
			function (result) {
				console.log(JSON.stringify(result));
			},
			function (errorMessage) {
				console.log("No current user");
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

module.exports = User;
