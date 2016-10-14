//var listViewModule = require("nativescript-telerik-ui/listview");
//var drawerModule = require("nativescript-telerik-ui/sidedrawer");

var UserViewModel = require("./views/login/user-view-model");

var application = require("application");

global.user = new UserViewModel();
user.init();

//application.start({ moduleName: "views/login/login-page" });
//application.start({ moduleName: "views/profile/profile-create" });
application.start({ moduleName: "views/switch/switch-view" });
