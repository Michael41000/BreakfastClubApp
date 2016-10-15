var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var page;
var SquadViewModel = require("./squad-view-model");
var squad = new SquadViewModel();
/*var pageData = new observableModule.fromObject({
	squadMembers: new ObservableArray([
		{ memberFullName: "Generic Member 1" },
		{ memberFullName: "Generic Member 2" },
		{ memberFullName: "Generic Member 3" }
	])
});*/

var pageData = new Observable();
pageData.squadMembers = new ObservableArray([
	{ memberFullName: "Generic Member 1" },
	{ memberFullName: "Generic Member 2" },
	{ memberFullName: "Generic Member 3" }
]);

exports.loaded = function(args){
	page = args.object;
	page.bindingContext = squad;
};

exports.createSquad = function() {
	console.log("UserUid: " + user.uid);
	squad.captain = user.uid;
	console.log("SquadName: " + squad.squadName);
	console.log("SquadDesc: " + squad.squadDesc);
	console.log("SquadCaptain: " + squad.captain);
	console.log("SquadMember: " + squad.member);
	squad.create();
}
