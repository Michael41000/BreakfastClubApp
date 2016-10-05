var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var page;

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
	page.bindingContext = pageData;
};
