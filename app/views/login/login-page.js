var createViewModel = require("../main-page/main-view-model").createViewModel;
var UserViewModel = require("./user-view-model");
var frameModule = require("ui/frame");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
	//user.init();
}
exports.onNavigatingTo = onNavigatingTo;

exports.signIn = function() {
	user.login(goToProfilePage);
};

function goToProfilePage(success) {
	console.log("Success: " + success);
	if (success == true)
	{
		var topmost = frameModule.topmost();
		//topmost.navigate("views/profile/profile-create");
		//topmost.navigate("views/squad/squad-create");
		topmost.navigate("views/breakfast/breakfast-create");
	}
}
