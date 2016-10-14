var createViewModel = require("../main-page/main-view-model").createViewModel;
var UserViewModel = require("./user-view-model");
var frameModule = require("ui/frame");

exports.switchView = function() {
	console.log("switchView");
	frameModule.topmost().navigate("/views/switch/switch-view");
}

function onNavigatingTo(args) {
	var page = args.object;
	page.bindingContext = createViewModel();
	//user.init();
}
exports.onNavigatingTo = onNavigatingTo;

exports.signIn = function() {
	user.login(goToSwitchView);
};

function goToSwitchView(success) {
	console.log("Success: " + success);
	if (success == true)
	{
		var topmost = frameModule.topmost();
		//topmost.navigate("views/profile/profile-create");
		//topmost.navigate("views/squad/squad-create");
		//topmost.navigate("views/breakfast/breakfast-create");
		topmost.navigate("views/switch/switch-view");
	}
}
