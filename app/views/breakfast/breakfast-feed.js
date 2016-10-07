var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var listViewModule = require("ui/list-view");
var page;

/*var pageData = new observableModule.fromObject({
	squadMembers: new ObservableArray([
		{ memberFullName: "Generic Member 1" },
		{ memberFullName: "Generic Member 2" },
		{ memberFullName: "Generic Member 3" }
	])
});*/

var pageData = new Observable();
pageData.posts = new ObservableArray([
	{ votes: 42,
	  imgSrc: "https://dalewrites.files.wordpress.com/2012/09/saturn-v-rocket.jpeg"},
	{ votes: 1337,
	  imgSrc: "http://www.collectspace.com/images/news-101615a-lg.jpg"},
	{ votes: 9001,
	  imgSrc: "http://wallup.net/wp-content/uploads/2016/01/258094-Pillars_of_Creation-nebula-space-stars.jpg"}
]);

exports.loaded = function(post){
	page = args.object;
	page.bindingContext = pageData;
};
