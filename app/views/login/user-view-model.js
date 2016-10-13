var config = require("../../config");
var Observable = require("data/observable").Observable;
var firebase = require("nativescript-plugin-firebase");

function User(info) {
	info = info || {};

	// You can add properties to observables on creation
	var viewModel = new Observable({
		email: info.email || "",
		password: info.password || ""
	});

	viewModel.init = function(){
		firebase.init({
			url: config.apiUrl
		}).then(
			function (instance) {
				console.log("firebase.init done");
			},
			function (error) {
				console.log("firebase.init error: " + error);
			}
		);
	};
	
	viewModel.login = function() {
		return firebase.login({
	    	type: firebase.LoginType.FACEBOOK,
		    scope: ['public_profile', 'email'] // optional: defaults to ['public_profile', 'email']
		}).then(
			function (result) {
				JSON.stringify(result);
			},
			function (errorMessage) {
				console.log(errorMessage);
			}
		)
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
