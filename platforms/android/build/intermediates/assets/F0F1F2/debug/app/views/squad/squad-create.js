var page;
//var SquadViewModel = requre("./squad-view-model");
//var squad = new SquadViewModel();
var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;


exports.switchView = function() {
	console.log("switchView");
	frameModule.topmost().navigate("/views/switch/switch-view");
}

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
	//page.bindingContext = squad;
};

exports.createSquad = function() {
	//console.log(squadname);
};
