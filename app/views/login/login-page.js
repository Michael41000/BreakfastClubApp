var createViewModel = require("../main-page/main-view-model").createViewModel;
var UserViewModel = require("./user-view-model");
var user = new UserViewModel();

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
	user.init();
}
exports.onNavigatingTo = onNavigatingTo;

exports.signIn = function() {
	user.login();
};
