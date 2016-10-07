var page;
var UserViewModel = require("../login/user-view-model");
var SquadViewModel = requre("./squad-view-model");
//var squad = new SquadViewModel();

exports.loaded = function(args){
	page = args.object;
	//page.bindingContext = squad;
};

exports.createSquad = function() {
	//console.log(squadname);
};
