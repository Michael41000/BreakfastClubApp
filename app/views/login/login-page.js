var createViewModel = require("../main-page/main-view-model").createViewModel;
var UserViewModel = require("./user-view-model");
var user = new UserViewModel();
var frameModule = require("ui/frame");

exports.switchView = function() {
	console.log("switchView");
	frameModule.topmost().navigate("/views/switch/switch-view");
}

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
	user.init();
}
exports.onNavigatingTo = onNavigatingTo;

exports.signIn = function() {
	user.login();
};
