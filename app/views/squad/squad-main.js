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
	{ memberFullName: "Generic Member 1",
	  memberSrcImg: "https://s-media-cache-ak0.pinimg.com/736x/b7/21/26/b721265eb826b20e6f91d6643b95c122.jpg" },
	{ memberFullName: "Generic Member 2",
	  memberSrcImg: "https://s-media-cache-ak0.pinimg.com/736x/b7/21/26/b721265eb826b20e6f91d6643b95c122.jpg" },
	{ memberFullName: "Generic Member 3",
	  memberSrcImg: "https://s-media-cache-ak0.pinimg.com/736x/b7/21/26/b721265eb826b20e6f91d6643b95c122.jpg" }
]);

exports.loaded = function(args){
	page = args.object;
	page.bindingContext = pageData;
	squad.addValueEventListener();
};


